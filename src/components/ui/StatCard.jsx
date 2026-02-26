import { cn } from '../../utils/cn'

export default function StatCard({ title, value, icon: Icon, change, changeType = 'increase', color = 'primary', className }) {
  const colorMap = {
    primary: 'bg-primary-50 text-primary-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    red: 'bg-red-50 text-red-600',
  }

  return (
    <div className={cn('bg-white rounded-xl p-6 card-shadow hover:shadow-md transition-shadow', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1 text-gray-900">{value}</p>
          {change && (
            <p className={cn('text-sm mt-1', changeType === 'increase' ? 'text-green-600' : 'text-red-600')}>
              {changeType === 'increase' ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className={cn('p-3 rounded-lg', colorMap[color] || colorMap.primary)}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  )
}
