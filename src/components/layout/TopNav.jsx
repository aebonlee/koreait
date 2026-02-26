import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, Search, User, LogOut, Menu } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { signOut } from '../../services/authService'

export default function TopNav({ sidebarCollapsed, onMobileMenuToggle }) {
  const { user, profile, isAdmin, isAuthenticated } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-4 lg:px-6 transition-all duration-300"
      style={{ left: sidebarCollapsed ? '4rem' : '15rem' }}
    >
      {/* Left: Mobile menu + Search */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={onMobileMenuToggle}
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="검색..."
            className="bg-transparent outline-none text-sm w-48"
          />
        </div>
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-600" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-gray-700">
                  {profile?.full_name || user?.email?.split('@')[0]}
                </p>
                <p className="text-xs text-gray-400">
                  {isAdmin ? '관리자' : '회원'}
                </p>
              </div>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="w-4 h-4" />
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  )
}
