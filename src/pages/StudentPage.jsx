import TabLayout from '../components/common/TabLayout'
import { SECTION_COLORS } from '../utils/constants'
import { GraduationCap, Handshake, Briefcase, Users, FileText, Image } from 'lucide-react'

function TrainingSystem() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">교육훈련 체계도</h3>
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex flex-col items-center space-y-4">
          {[
            { step: '모집/선발', desc: '훈련생 모집 및 선발 과정' },
            { step: '교육훈련', desc: 'NCS 기반 직업능력개발훈련 실시' },
            { step: '평가/수료', desc: '성취도 평가 및 수료 처리' },
            { step: '취업지원', desc: '취업 상담, 알선, 사후관리' },
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-4 w-full max-w-md">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 bg-white rounded-lg p-3">
                <p className="font-medium text-gray-800">{item.step}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RecruitmentContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">모집 &amp; 홍보 매뉴얼</h3>
      <div className="space-y-3">
        {[
          { title: '모집&홍보 매뉴얼', desc: '훈련생 모집 및 홍보 활동 가이드라인', icon: Users },
          { title: '면담 및 고충처리계획서', desc: '훈련생 면담 절차 및 고충처리 계획', icon: FileText },
          { title: '중도탈락방지 계획서', desc: '훈련과정 중도 탈락 방지를 위한 대책', icon: FileText },
          { title: '중도탈락방지방안', desc: '구체적인 중도탈락 방지 실행 방안', icon: FileText },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg hover:border-blue-200 transition-colors">
            <item.icon className="w-5 h-5 text-blue-500 mt-0.5" />
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

function EmploymentSupport() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">취업지원</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: '취업처 발굴내역', desc: '취업 연계 기업 발굴 및 관리 현황', icon: Briefcase },
          { title: 'MOU 및 협력기관', desc: '산학협력 MOU 체결 기관 현황', icon: Handshake },
          { title: '훈련생 취업지원 교육', desc: '이력서 작성, 면접 준비 등 취업 지원 프로그램', icon: GraduationCap },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg hover:border-blue-200 transition-colors">
            <item.icon className="w-5 h-5 text-blue-500 mt-0.5" />
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

function GalleryContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">EduCom 갤러리</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <Image className="w-8 h-8 text-gray-300" />
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">교육 현장 및 행사 사진</p>
    </div>
  )
}

export default function StudentPage() {
  const tabs = [
    { label: '교육훈련 체계도', content: <TrainingSystem /> },
    { label: '모집/홍보', content: <RecruitmentContent /> },
    { label: '취업지원', content: <EmploymentSupport /> },
    { label: 'EduCom 갤러리', content: <GalleryContent /> },
  ]

  return (
    <TabLayout
      title="Ⅴ. 훈련생관리"
      subtitle="훈련생 모집, 관리, 취업지원 관련 자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub05}
    />
  )
}
