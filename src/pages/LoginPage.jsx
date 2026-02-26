import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, Chrome } from 'lucide-react'
import { signInWithEmail, signInWithGoogle, signInWithKakao } from '../services/authService'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signInWithEmail(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message === 'Invalid login credentials'
        ? '이메일 또는 비밀번호가 올바르지 않습니다.'
        : err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
    } catch (err) {
      setError('Google 로그인에 실패했습니다.')
    }
  }

  const handleKakaoLogin = async () => {
    try {
      await signInWithKakao()
    } catch (err) {
      setError('카카오 로그인에 실패했습니다.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">E</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">코리아IT아카데미</h1>
          <p className="text-gray-500 mt-1">KoreaIT Dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}

            <Input
              label="이메일"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200" />
            <span className="px-4 text-sm text-gray-400">또는</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
              <Chrome className="w-5 h-5 mr-2" />
              Google로 로그인
            </Button>
            <Button
              variant="outline"
              className="w-full bg-[#FEE500] hover:bg-[#FDD835] border-[#FEE500] text-gray-800"
              onClick={handleKakaoLogin}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.84 5.18 4.6 6.55-.2.74-.73 2.7-.84 3.12-.13.52.19.51.4.37.17-.11 2.62-1.78 3.68-2.5.7.1 1.42.16 2.16.16 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
              </svg>
              카카오로 로그인
            </Button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm">
            <Link to="/register" className="text-primary-500 hover:text-primary-600">
              회원가입
            </Link>
            <span className="mx-2 text-gray-300">|</span>
            <button className="text-gray-500 hover:text-gray-600">
              비밀번호 찾기
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} 코리아IT아카데미. All rights reserved.
        </p>
      </div>
    </div>
  )
}
