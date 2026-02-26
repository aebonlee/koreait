import TabLayout from '../components/common/TabLayout'
import PlaceholderContent from '../components/common/PlaceholderContent'
import { SECTION_COLORS } from '../utils/constants'
import { User, Award, FileText, Star } from 'lucide-react'

function TaskAssignment() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">업무분장규정 (분장표)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-medium text-gray-600">직위</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">성명</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">주요 업무</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">원장</td>
              <td className="px-4 py-3 text-gray-700">최인욱</td>
              <td className="px-4 py-3 text-gray-600">기관 총괄경영, 대외협력, 인사관리</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">부원장</td>
              <td className="px-4 py-3 text-gray-700">안혁환</td>
              <td className="px-4 py-3 text-gray-600">교육과정 관리, 학생관리, 행정업무 총괄</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">훈련교사</td>
              <td className="px-4 py-3 text-gray-700">이애본</td>
              <td className="px-4 py-3 text-gray-600">IT 과정 교육, 교안 개발, 학생 상담</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StaffProfiles() {
  const staffList = [
    { name: '김홍구', role: '대표', desc: '㈜코리아정보보안아이티아카데미신촌 대표, 기관 총괄 경영', certs: ['직업능력개발훈련교사', '정보처리기사'] },
    { name: '최인욱', role: '개인정보책임자', desc: '개인정보보호 및 정보보안 총괄', certs: ['정보보안기사', '개인정보관리사'] },
    { name: '이애본', role: '훈련교사', desc: 'IT 과정 교육 및 교안 개발', certs: ['직업능력개발훈련교사', '정보처리기사', '웹디자인기능사'] },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">교직원 프로필</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {staffList.map((staff) => (
          <div key={staff.name} className="border rounded-xl p-5 hover:border-primary-200 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{staff.name}</h4>
                <p className="text-sm text-primary-500">{staff.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">{staff.desc}</p>
            <div className="flex flex-wrap gap-1">
              {staff.certs.map((cert) => (
                <span key={cert} className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-xs rounded-full">{cert}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EvaluationContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">직무평가 (지침, 계획)</h3>
      <div className="space-y-3">
        {[
          { title: '직무평가 지침', desc: '교직원 직무 수행 평가 기준 및 절차' },
          { title: '교직원선발 기준표', desc: '신규 교직원 선발 시 적용되는 평가 기준' },
          { title: '교직원역량개발', desc: '직무능력 향상을 위한 역량개발 프로그램' },
          { title: '고용보험가입내역', desc: '전 교직원 고용보험 가입 현황' },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg">
            <FileText className="w-5 h-5 text-yellow-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function StaffPage() {
  const tabs = [
    { label: '업무분장규정', content: <TaskAssignment /> },
    { label: '교직원 프로필', content: <StaffProfiles /> },
    { label: '직무평가/역량개발', content: <EvaluationContent /> },
    { label: '교직원업무분장', content: <PlaceholderContent title="교직원업무분장" /> },
    { label: '교직원직무평가', content: <PlaceholderContent title="교직원직무평가" /> },
    { label: '인센티브 지급내역', content: <PlaceholderContent title="인센티브 지급내역" /> },
    { label: '채용공고/선발기준', content: <PlaceholderContent title="채용공고/선발기준" /> },
    { label: 'KoreaIT 취업규칙', content: <PlaceholderContent title="KoreaIT 취업규칙" /> },
    { label: '예비인력풀 구축', content: <PlaceholderContent title="예비인력풀 구축" /> },
    { label: '교직원 만족도조사', content: <PlaceholderContent title="교직원 만족도조사" /> },
  ]

  return (
    <TabLayout
      title="Ⅲ. 훈련전담인력"
      subtitle="교직원 관리 및 역량 개발 관련 자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub03}
    />
  )
}
