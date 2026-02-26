import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Card from '../ui/Card'
import { CHART_COLORS } from '../../utils/constants'

export default function LineChartCard({ title, data, dataKeys, colors, action }) {
  const defaultColors = [CHART_COLORS.primary, CHART_COLORS.cyan, CHART_COLORS.green]

  return (
    <Card title={title} action={action}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
            <Legend />
            {(dataKeys || ['value']).map((key, i) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={(colors || defaultColors)[i % defaultColors.length]}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
