import { BookOpen, Handshake, UserCheck, FileText, ShieldCheck } from 'lucide-react'
import Card from '../ui/Card'

const typeIcons = {
  course: BookOpen,
  partner: Handshake,
  staff: UserCheck,
  document: FileText,
  infra: ShieldCheck,
}

const typeColors = {
  course: 'text-blue-500 bg-blue-50',
  partner: 'text-green-500 bg-green-50',
  staff: 'text-purple-500 bg-purple-50',
  document: 'text-orange-500 bg-orange-50',
  infra: 'text-cyan-500 bg-cyan-50',
}

export default function ActivityTimeline({ data }) {
  return (
    <Card title="최근 활동">
      <div className="space-y-4">
        {data.map((item, index) => {
          const Icon = typeIcons[item.type] || FileText
          const colorClass = typeColors[item.type] || 'text-gray-500 bg-gray-50'
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg flex-shrink-0 ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800">{item.action}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
              </div>
              {index < data.length - 1 && (
                <div className="absolute left-7 top-10 w-px h-6 bg-gray-100" />
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
