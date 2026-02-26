import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '../ui/Card'
import { CHART_COLORS } from '../../utils/constants'

export default function AreaChartCard({ title, data, dataKey = 'value', color, action }) {
  const fillColor = color || CHART_COLORS.primary

  return (
    <Card title={title} action={action}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={fillColor}
              fill={fillColor}
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
