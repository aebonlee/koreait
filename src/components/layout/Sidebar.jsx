import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LogIn } from 'lucide-react'
import { cn } from '../../utils/cn'
import { NAV_ITEMS, EXTRA_NAV_ITEMS, ADMIN_NAV_ITEMS } from '../../utils/constants'
import { useAuth } from '../../contexts/AuthContext'

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const { isAuthenticated, isAdmin } = useAuth()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-sidebar z-40 transition-all duration-300 flex flex-col',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center px-4 border-b border-gray-700">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          {!collapsed && (
            <span className="text-white font-semibold text-sm whitespace-nowrap">에듀컴퓨터교육학원</span>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-primary-500/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
                )
              }
              title={item.label}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </div>

        {/* Separator */}
        <div className="my-4 border-t border-gray-700" />

        {/* Extra Items */}
        <div className="space-y-1">
          {EXTRA_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-primary-500/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
                )
              }
              title={item.label}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </div>

        {/* Admin */}
        {isAdmin && (
          <>
            <div className="my-4 border-t border-gray-700" />
            <div className="space-y-1">
              {ADMIN_NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                      isActive
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
                    )
                  }
                  title={item.label}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </NavLink>
              ))}
            </div>
          </>
        )}

        {/* Login link for unauthenticated users */}
        {!isAuthenticated && (
          <>
            <div className="my-4 border-t border-gray-700" />
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-primary-500/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
                )
              }
              title="로그인"
            >
              <LogIn className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>로그인</span>}
            </NavLink>
          </>
        )}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className="flex items-center justify-center h-12 border-t border-gray-700 text-gray-400 hover:text-white hover:bg-sidebar-hover transition-colors"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>
    </aside>
  )
}
