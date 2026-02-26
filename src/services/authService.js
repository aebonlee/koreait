import { supabase, supabaseEnabled } from './supabase'

function requireSupabase() {
  if (!supabaseEnabled) throw new Error('Supabase가 설정되지 않았습니다. .env 파일을 확인하세요.')
}

export async function signInWithGoogle() {
  requireSupabase()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  })
  if (error) throw error
  return data
}

export async function signInWithKakao() {
  requireSupabase()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: window.location.origin,
    },
  })
  if (error) throw error
  return data
}

export async function signInWithEmail(email, password) {
  requireSupabase()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

export async function signUp(email, password, name) {
  requireSupabase()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  })
  if (error) throw error
  return data
}

export async function signOut() {
  requireSupabase()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function resetPassword(email) {
  requireSupabase()
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/login`,
  })
  if (error) throw error
  return data
}

export async function getUserProfile(userId) {
  requireSupabase()
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  if (error && error.code !== 'PGRST116') throw error
  return data
}

export async function upsertUserProfile(profile) {
  requireSupabase()
  const { data, error } = await supabase
    .from('user_profiles')
    .upsert(profile)
    .select()
    .single()
  if (error) throw error
  return data
}
