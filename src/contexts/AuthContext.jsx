import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { getUserProfile, upsertUserProfile } from '../services/authService'
import { isAdminEmail } from '../config/admin'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        handleUser(session.user)
      } else {
        setLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          await handleUser(session.user)
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
          setProfile(null)
          setIsAdmin(false)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  async function handleUser(authUser) {
    setUser(authUser)
    setIsAdmin(isAdminEmail(authUser.email))

    try {
      let userProfile = await getUserProfile(authUser.id)
      if (!userProfile) {
        userProfile = await upsertUserProfile({
          id: authUser.id,
          email: authUser.email,
          full_name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || '',
          avatar_url: authUser.user_metadata?.avatar_url || '',
        })
      }
      setProfile(userProfile)
    } catch (err) {
      console.error('Failed to load profile:', err)
    }
    setLoading(false)
  }

  const value = {
    user,
    profile,
    isAdmin,
    loading,
    isAuthenticated: !!user,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
