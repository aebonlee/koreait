import TabLayout from '../components/common/TabLayout'
import { SECTION_COLORS } from '../utils/constants'
import { Scale, BookOpen, Search, FileText, FolderOpen } from 'lucide-react'

function LawContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">법령자료</h3>
      <div className="space-y-3">
        {[
          { title: '근로자직업능력 개발법', desc: '직업능력개발훈련 관련 기본 법령' },
          { title: '직업교육훈련 촉진법', desc: '직업교육훈련의 촉진에 관한 법률' },
          { title: '고용보험법', desc: '고용보험 및 직업능력개발 관련 규정' },
          { title: '학원의 설립·운영 및 과외교습에 관한 법률', desc: '학원 운영 관련 법률' },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg hover:border-purple-200 transition-colors">
            <Scale className="w-5 h-5 text-purple-500 mt-0.5" />
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

function TrainingMaterials() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">교직원 연수자료</h3>
      <div className="space-y-3">
        {['교직원 직무연수 자료', 'NCS 활용 교육과정 개편 연수', '산업안전보건 교육자료'].map((doc) => (
          <div key={doc} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function KSQAContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">KSQA 정보수집</h3>
      <p className="text-sm text-gray-600">한국직업능력연구원(KSQA) 관련 정보 및 자료를 수집하여 교육훈련 품질 관리에 활용합니다.</p>
      <div className="bg-purple-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Search className="w-5 h-5 text-purple-500" />
          <h4 className="font-medium text-purple-800">주요 수집 영역</h4>
        </div>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>훈련기관 인증평가 기준 변경사항</li>
          <li>NCS 학습모듈 업데이트 정보</li>
          <li>직업훈련 품질관리 가이드라인</li>
          <li>훈련성과 평가 방법론</li>
        </ul>
      </div>
    </div>
  )
}

function LectureMaterials() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">강의자료 및 교안</h3>
      <div className="space-y-3">
        {['강의자료 및 교안', '수집자료'].map((doc) => (
          <div key={doc} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <FileText className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormsContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">학원 서식</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          '출석부 서식', '성적표 서식', '수료증 서식', '상담일지 서식',
          '강의계획서 서식', '훈련일지 서식', '만족도조사 서식', '기타 서식'
        ].map((form) => (
          <div key={form} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FolderOpen className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-700">{form}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ReferencePage() {
  const tabs = [
    { label: '법령자료', content: <LawContent /> },
    { label: '교직원 연수자료', content: <TrainingMaterials /> },
    { label: 'KSQA 정보수집', content: <KSQAContent /> },
    { label: '강의자료/교안', content: <LectureMaterials /> },
    { label: '학원 서식', content: <FormsContent /> },
  ]

  return (
    <TabLayout
      title="Ⅶ. 참고자료"
      subtitle="법령, 연수자료, 서식 등 참고자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub07}
    />
  )
}
