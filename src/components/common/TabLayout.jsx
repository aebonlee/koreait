import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cn } from '../../utils/cn'

export default function TabLayout({ title, subtitle, tabs, sectionColor }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = Number(searchParams.get('tab')) || 0
  const [activeTab, setActiveTab] = useState(tabParam < tabs.length ? tabParam : 0)

  useEffect(() => {
    const t = Number(searchParams.get('tab')) || 0
    if (t < tabs.length) setActiveTab(t)
  }, [searchParams, tabs.length])

  function handleTabClick(index) {
    setActiveTab(index)
    setSearchParams(index === 0 ? {} : { tab: index }, { replace: true })
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        {sectionColor && (
          <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: sectionColor }} />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl card-shadow">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="flex px-6 -mb-px" role="tablist">
            {tabs.map((tab, index) => (
              <button
                key={index}
                role="tab"
                onClick={() => handleTabClick(index)}
                className={cn(
                  'py-4 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors',
                  index === activeTab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          {tabs[activeTab]?.content}
        </div>
      </div>
    </div>
  )
}
