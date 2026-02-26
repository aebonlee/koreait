import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import Footer from './Footer'
import { cn } from '../../utils/cn'

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <TopNav
        sidebarCollapsed={sidebarCollapsed}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main
        className={cn(
          'pt-16 min-h-screen transition-all duration-300',
          sidebarCollapsed ? 'ml-16' : 'ml-60'
        )}
      >
        <div className="p-4 lg:p-6">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  )
}
