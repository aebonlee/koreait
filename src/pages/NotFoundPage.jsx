import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-500 mb-6">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link to="/">
          <Button>
            <Home className="w-4 h-4 mr-2" />
            대시보드로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  )
}
