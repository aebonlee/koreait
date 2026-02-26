import { useDashboardData } from '../hooks/useDashboardData'
import KPISection from '../components/dashboard/KPISection'
import LineChartCard from '../components/charts/LineChartCard'
import BarChartCard from '../components/charts/BarChartCard'
import PieChartCard from '../components/charts/PieChartCard'
import RecentNews from '../components/dashboard/RecentNews'
import PartnerGrid from '../components/dashboard/PartnerGrid'
import ActivityTimeline from '../components/dashboard/ActivityTimeline'
import Spinner from '../components/ui/Spinner'

export default function DashboardPage() {
  const { kpi, enrollment, employment, courses, news, partners, activity, loading } = useDashboardData()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
        <p className="text-sm text-gray-500 mt-1">에듀컴퓨터교육학원 운영 현황 한눈에 보기</p>
      </div>

      {/* KPI Cards */}
      <KPISection data={kpi} />

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChartCard
          title="월별 수강 현황"
          data={enrollment}
          dataKeys={['신규', '수료']}
          colors={['#3f51b5', '#2ddbdc']}
        />
        <PieChartCard
          title="취업 현황"
          data={employment}
        />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartCard
          title="과정별 수강생 현황"
          data={courses}
          dataKeys={['수강생', '수료율']}
          colors={['#3f51b5', '#10b981']}
        />
        <RecentNews data={news} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PartnerGrid data={partners} />
        <ActivityTimeline data={activity} />
      </div>
    </div>
  )
}
