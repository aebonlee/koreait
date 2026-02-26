import { Newspaper, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const categoryVariants = {
  '공지': 'primary',
  '시험': 'warning',
  '과정': 'info',
  '협력': 'success',
  '내부': 'default',
}

export default function RecentNews({ data }) {
  return (
    <Card
      title="최근 소식"
      action={
        <Link to="/news" className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1">
          전체보기 <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
            <div className="flex items-start gap-3">
              <Newspaper className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
            <Badge variant={categoryVariants[item.category] || 'default'}>
              {item.category}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
