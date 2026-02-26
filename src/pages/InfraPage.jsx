import TabLayout from '../components/common/TabLayout'
import { SECTION_COLORS } from '../utils/constants'
import { ShieldCheck, Monitor, Server, FileText, Flame } from 'lucide-react'

function SafetyRules() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">안전관리 규정</h3>
      <div className="space-y-3">
        {[
          { title: '안전관리 규정', desc: '학원 내 안전관리에 관한 전반적인 규정', icon: ShieldCheck },
          { title: '안전관리 매뉴얼', desc: '비상 상황 대응 매뉴얼 및 행동 요령', icon: FileText },
          { title: 'KoreaIT 자위소방대', desc: '자체 소방 조직 구성 및 운영 계획', icon: Flame },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg hover:border-green-200 transition-colors">
            <item.icon className="w-5 h-5 text-green-500 mt-0.5" />
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

function SafetyEducation() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">안전교육/참고자료</h3>
      <div className="space-y-3">
        {[
          '안전교육 및 참고자료', '재해보험 내역'
        ].map((doc) => (
          <div key={doc} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <FileText className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Facilities() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련시설 현황</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-medium text-gray-600">구분</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">면적</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">용도</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">수용인원</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { type: '1강의실', area: '50㎡', use: 'ITQ/컴활 교육', capacity: '25명' },
              { type: '2강의실', area: '45㎡', use: 'CAD/그래픽 교육', capacity: '20명' },
              { type: '3강의실', area: '40㎡', use: '프로그래밍 교육', capacity: '18명' },
              { type: '상담실', area: '15㎡', use: '학생상담/면담', capacity: '5명' },
              { type: '교무실', area: '25㎡', use: '교직원 업무', capacity: '6명' },
            ].map((row) => (
              <tr key={row.type} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.area}</td>
                <td className="px-4 py-3 text-gray-600">{row.use}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Equipment() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련장비 현황</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: '데스크탑 PC', count: '60대', spec: 'i5 이상, RAM 16GB, SSD 512GB' },
          { name: '모니터', count: '60대', spec: '24인치 FHD 이상' },
          { name: '프로젝터', count: '3대', spec: '3,000루멘 이상' },
          { name: '프린터/복합기', count: '3대', spec: '레이저 복합기' },
          { name: '소프트웨어', count: '다수', spec: 'MS Office, Adobe CC, AutoCAD 등' },
          { name: '네트워크 장비', count: '다수', spec: '공유기, 스위치 등' },
        ].map((item) => (
          <div key={item.name} className="flex items-start gap-3 p-4 border rounded-lg">
            <Monitor className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{item.count}</span>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{item.spec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SoftwareManagement() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">소프트웨어 관리대장</h3>
      <div className="space-y-3">
        {[
          { title: '훈련시설&장비 규정', desc: '시설 및 장비 관리에 관한 규정' },
          { title: '소프트웨어 관리대장', desc: '설치된 소프트웨어 목록 및 라이선스 관리' },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg">
            <Server className="w-5 h-5 text-green-500 mt-0.5" />
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

export default function InfraPage() {
  const tabs = [
    { label: '안전관리 규정', content: <SafetyRules /> },
    { label: '안전교육/참고자료', content: <SafetyEducation /> },
    { label: '훈련시설 현황', content: <Facilities /> },
    { label: '훈련장비 현황', content: <Equipment /> },
    { label: 'SW 관리대장', content: <SoftwareManagement /> },
  ]

  return (
    <TabLayout
      title="Ⅳ. 훈련인프라"
      subtitle="훈련시설, 장비, 안전관리 관련 자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub04}
    />
  )
}
