import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ChevronDown, LogIn } from 'lucide-react'
import { cn } from '../../utils/cn'
import { NAV_ITEMS, EXTRA_NAV_ITEMS, ADMIN_NAV_ITEMS } from '../../utils/constants'
import { useAuth } from '../../contexts/AuthContext'

function NavItem({ item, collapsed, openPath, onToggle }) {
  const location = useLocation()
  const navigate = useNavigate()

  const hasChildren = item.children?.length > 0
  const isCurrentSection = location.pathname === item.path
  const isOpen = openPath === item.path

  function handleParentClick(e) {
    if (hasChildren && !collapsed) {
      e.preventDefault()
      onToggle(isOpen ? null : item.path)
    }
  }

  function handleChildClick(tab) {
    navigate(`${item.path}?tab=${tab}`)
  }

  return (
    <div>
      {/* Parent Item */}
      <NavLink
        to={item.path}
        end={!hasChildren && item.path === '/'}
        onClick={handleParentClick}
        className={({ isActive: linkActive }) =>
          cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors group',
            (linkActive || isCurrentSection)
              ? 'bg-primary-500/20 text-white'
              : 'text-gray-200 hover:text-white hover:bg-sidebar-hover'
          )
        }
        title={item.label}
      >
        <item.icon className="w-5 h-5 flex-shrink-0" />
        {!collapsed && (
          <>
            <span className="truncate flex-1">{item.label}</span>
            {hasChildren && (
              <ChevronDown
                className={cn(
                  'w-4 h-4 flex-shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
              />
            )}
          </>
        )}
      </NavLink>

      {/* Children Dropdown */}
      {hasChildren && !collapsed && isOpen && (
        <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-700 pl-3">
          {item.children.map((child) => {
            const isChildSelected =
              location.pathname === item.path &&
              Number(new URLSearchParams(location.search).get('tab')) === child.tab

            return (
              <button
                key={child.tab}
                onClick={() => handleChildClick(child.tab)}
                className={cn(
                  'w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors truncate',
                  isChildSelected
                    ? 'text-white font-semibold bg-primary-500/15'
                    : 'text-gray-300 hover:text-white hover:bg-sidebar-hover'
                )}
              >
                {child.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const { isAuthenticated, isAdmin } = useAuth()
  const [openPath, setOpenPath] = useState(null)

  // 페이지 이동 시: 현재 섹션 드롭다운만 열고 나머지 닫기
  useEffect(() => {
    const match = NAV_ITEMS.find(
      (item) => item.children?.length && location.pathname === item.path
    )
    setOpenPath(match ? match.path : null)
  }, [location.pathname])

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
            <NavItem
              key={item.path}
              item={item}
              collapsed={collapsed}
              openPath={openPath}
              onToggle={setOpenPath}
            />
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
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-primary-500/20 text-white'
                    : 'text-gray-200 hover:text-white hover:bg-sidebar-hover'
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
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'text-gray-200 hover:text-white hover:bg-sidebar-hover'
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
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-primary-500/20 text-white'
                    : 'text-gray-200 hover:text-white hover:bg-sidebar-hover'
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
