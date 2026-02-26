import TabLayout from '../components/common/TabLayout'
import { SECTION_COLORS } from '../utils/constants'
import { ClipboardList, FileCheck, BarChart3, BookOpen } from 'lucide-react'

function DevelopmentProcess() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련과정 개발절차</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['수요조사', '과정설계', '과정개발', '과정평가'].map((step, i) => (
          <div key={step} className="text-center">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              {i + 1}
            </div>
            <p className="font-medium text-gray-800">{step}</p>
          </div>
        ))}
      </div>
      <div className="bg-orange-50 rounded-lg p-4 mt-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          에듀컴퓨터교육학원은 체계적인 훈련과정 개발절차를 통해 산업현장의 수요에 맞는
          고품질 교육훈련과정을 개발하고 운영합니다. 훈련수요 조사부터 과정 평가까지
          일관된 프로세스를 유지합니다.
        </p>
      </div>
    </div>
  )
}

function DemandSurvey() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련수요 및 요구조사</h3>
      <div className="space-y-3">
        {[
          { title: '산업체 수요조사', desc: '지역 산업체의 인력 수요 및 교육 요구사항 파악' },
          { title: '훈련생 요구조사', desc: '기존 및 잠재 훈련생의 교육 수요 조사' },
          { title: 'NCS 기반 분석', desc: '국가직무능력표준(NCS)에 기반한 직무 분석' },
        ].map((item) => (
          <div key={item.title} className="p-4 border rounded-lg">
            <h4 className="font-medium text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function OperationRules() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련운영규정</h3>
      <div className="space-y-3">
        {[
          '훈련운영규정', '교사&학생 규정,지침표', '이수자평가 체계도'
        ].map((doc) => (
          <div key={doc} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <ClipboardList className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CourseHistory() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">훈련과정 개발내역</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-medium text-gray-600">과정명</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">개발년도</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">NCS 분류</th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: 'ITQ 엑셀', year: '2023', ncs: '사무행정', status: '운영중' },
              { name: 'GTQ 포토샵', year: '2023', ncs: '시각디자인', status: '운영중' },
              { name: 'AutoCAD 기계설계', year: '2023', ncs: '기계설계', status: '운영중' },
              { name: '파이썬 프로그래밍', year: '2023', ncs: '응용SW엔지니어링', status: '운영중' },
            ].map((course) => (
              <tr key={course.name} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{course.name}</td>
                <td className="px-4 py-3 text-center text-gray-600">{course.year}</td>
                <td className="px-4 py-3 text-center text-gray-600">{course.ncs}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{course.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  const tabs = [
    { label: '훈련과정 개발절차', content: <DevelopmentProcess /> },
    { label: '훈련수요 및 요구조사', content: <DemandSurvey /> },
    { label: '훈련운영규정', content: <OperationRules /> },
    { label: '훈련과정 개발내역', content: <CourseHistory /> },
  ]

  return (
    <TabLayout
      title="Ⅱ. 훈련과정관리"
      subtitle="훈련과정의 개발, 운영, 평가 관련 자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub02}
    />
  )
}
