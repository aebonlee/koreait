import { BarChart3, TrendingUp, Award, Target, CheckCircle } from 'lucide-react'
import TabLayout from '../components/common/TabLayout'
import Card from '../components/ui/Card'
import { SECTION_COLORS } from '../utils/constants'

function PerformanceOverview() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">실적평가 개요</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '훈련 실시율', value: '95.2%', icon: Target, color: 'text-blue-500 bg-blue-50' },
          { label: '수료율', value: '89.7%', icon: CheckCircle, color: 'text-green-500 bg-green-50' },
          { label: '취업률', value: '78.5%', icon: TrendingUp, color: 'text-purple-500 bg-purple-50' },
          { label: '만족도', value: '4.3/5.0', icon: Award, color: 'text-orange-500 bg-orange-50' },
        ].map((item) => (
          <div key={item.label} className="bg-white border rounded-xl p-5 text-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            <p className="text-sm text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function YearlyPerformance() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">연도별 실적</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-center font-medium text-gray-600">연도</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">훈련과정수</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">훈련인원</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">수료율</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">취업률</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">만족도</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { year: '2023', courses: 24, students: 485, completion: '89.7%', employment: '78.5%', satisfaction: '4.3' },
              { year: '2022', courses: 20, students: 412, completion: '87.3%', employment: '75.2%', satisfaction: '4.1' },
              { year: '2021', courses: 18, students: 350, completion: '85.8%', employment: '72.1%', satisfaction: '4.0' },
            ].map((row) => (
              <tr key={row.year} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-center font-medium text-gray-800">{row.year}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.courses}개</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.students}명</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.completion}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.employment}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.satisfaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SelfEvaluation() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">자체평가보고서</h3>
      <div className="bg-yellow-50 rounded-lg p-6">
        <h4 className="font-medium text-yellow-800 mb-3">2023 자체평가보고서 주요 내용</h4>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-bold">1.</span>
            <p>기관경영 분야: 투명한 운영 시스템 구축 및 안정적 기관 경영</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-bold">2.</span>
            <p>훈련과정관리: NCS 기반 교육과정 체계적 개발 및 운영</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-bold">3.</span>
            <p>훈련전담인력: 전문 교직원 확보 및 지속적 역량 개발</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-bold">4.</span>
            <p>훈련인프라: 최신 시설/장비 확보 및 안전한 교육환경 조성</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-bold">5.</span>
            <p>훈련생관리: 체계적인 학생 관리 및 취업 지원 시스템 구축</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EvaluationPage() {
  const tabs = [
    { label: '실적평가 개요', content: <PerformanceOverview /> },
    { label: '연도별 실적', content: <YearlyPerformance /> },
    { label: '자체평가보고서', content: <SelfEvaluation /> },
  ]

  return (
    <TabLayout
      title="Ⅷ. 실적평가"
      subtitle="훈련기관 실적평가 데이터 및 보고서"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub08}
    />
  )
}
