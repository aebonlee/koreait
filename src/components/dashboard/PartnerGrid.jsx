import { Building2, Landmark, Building, FlaskConical } from 'lucide-react'
import Card from '../ui/Card'

const typeIcons = {
  '정부기관': Landmark,
  '지자체': Building,
  '연구기관': FlaskConical,
  '기업': Building2,
}

export default function PartnerGrid({ data }) {
  return (
    <Card title="협력기관/기업">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {data.map((partner) => {
          const Icon = typeIcons[partner.type] || Building2
          return (
            <div
              key={partner.id}
              className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-6 h-6 text-primary-400 mb-2" />
              <p className="text-xs text-center font-medium text-gray-700">{partner.name}</p>
              <p className="text-xs text-gray-400">{partner.type}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
