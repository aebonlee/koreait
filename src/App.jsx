import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import AdminGuard from './components/common/AdminGuard'

// Pages
import DashboardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import StaffPage from './pages/StaffPage'
import InfraPage from './pages/InfraPage'
import StudentPage from './pages/StudentPage'
import ProgramsPage from './pages/ProgramsPage'
import ReferencePage from './pages/ReferencePage'
import EvaluationPage from './pages/EvaluationPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      {/* Auth pages (no layout) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard layout pages */}
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/infra" element={<InfraPage />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/reference" element={<ReferencePage />} />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/admin/*"
          element={
            <AdminGuard>
              <AdminDashboardPage />
            </AdminGuard>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
