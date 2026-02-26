import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Spinner from '../ui/Spinner'

export default function AdminGuard({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}
