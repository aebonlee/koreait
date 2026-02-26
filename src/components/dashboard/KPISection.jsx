import { Users, Briefcase, BookOpen, Building2 } from 'lucide-react'
import StatCard from '../ui/StatCard'

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  book: BookOpen,
  building: Building2,
}

const colorMap = {
  users: 'cyan',
  briefcase: 'green',
  book: 'purple',
  building: 'orange',
}

export default function KPISection({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((kpi) => (
        <StatCard
          key={kpi.id}
          title={kpi.label}
          value={kpi.value}
          change={kpi.change}
          changeType="increase"
          icon={iconMap[kpi.icon] || Users}
          color={colorMap[kpi.icon] || 'primary'}
        />
      ))}
    </div>
  )
}
