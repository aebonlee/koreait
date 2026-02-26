import { Building2, Award, Users, MapPin, FileText, Shield } from 'lucide-react'
import TabLayout from '../components/common/TabLayout'
import PlaceholderContent from '../components/common/PlaceholderContent'
import { SECTION_COLORS } from '../utils/constants'

function IntroContent() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-primary-800 mb-4">코리아IT아카데미 소개</h3>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-primary-700 mb-1">설립정신</h4>
            <p>
              컴퓨터를 활용한 직무교육에 있어 전문적이고, 개인의 역량과 능력 향상에 필요한 교육 훈련 기관으로
              지역사회에 필요한 인재 양성 교육기관으로 모범적인 운영과 신뢰를 바탕으로 하는 교육기관을 경영하고자 설립 운영하고 있음.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-700 mb-1">교육목적</h4>
            <p>
              "급변하는 사회에 적응할 수 있는 기술 교육훈련과 함께 살아가는 사회의 구성원으로 협업 &amp; 따뜻한 마음 나누기"를
              교육의 목표로 삼고 "최고의 컴퓨터 전문 기술人"을 양성하는데 최선을 다하고 있음.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-700 mb-1">교육목표</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>이론 및 실습을 바탕으로 기업체 현장에서 필요로 하는 기술인 양성</li>
              <li>합리적 사고와 올바른 가치관을 가진 인재 육성</li>
              <li>변화하는 사회에 능동적으로 적응할 수 있는 기술인 양성</li>
              <li>개인의 다양성을 존중하여 창조적 기술인 양성</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 text-center">
          <Building2 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">위치</h4>
          <p className="text-sm text-gray-500 mt-1">서울특별시 마포구 서강로 136 아이비타워 2층, 3층</p>
        </div>
        <div className="bg-white border rounded-lg p-4 text-center">
          <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">인증</h4>
          <p className="text-sm text-gray-500 mt-1">고용노동부 인증 훈련기관</p>
        </div>
        <div className="bg-white border rounded-lg p-4 text-center">
          <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">교직원</h4>
          <p className="text-sm text-gray-500 mt-1">전문 훈련교사 및 관리직원</p>
        </div>
      </div>
    </div>
  )
}

function ManagementContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">경영원칙</h3>
      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-3">
        <p>코리아IT아카데미은 다음의 경영원칙을 기반으로 운영합니다:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>투명한 경영</strong> - 모든 운영과정의 투명성 확보</li>
          <li><strong>학생 중심</strong> - 학생의 성장과 취업을 최우선 가치로</li>
          <li><strong>전문성 강화</strong> - 교직원의 지속적인 역량 개발</li>
          <li><strong>지역사회 기여</strong> - 지역 인재 양성을 통한 사회 공헌</li>
        </ul>
      </div>
    </div>
  )
}

function OrgChartContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">조직도 (직제규정)</h3>
      <div className="flex flex-col items-center py-8">
        <div className="bg-primary-500 text-white px-8 py-3 rounded-lg font-bold text-center">
          원장<br/><span className="text-sm font-normal">최인욱</span>
        </div>
        <div className="w-px h-8 bg-gray-300" />
        <div className="bg-primary-400 text-white px-8 py-3 rounded-lg font-bold text-center">
          부원장<br/><span className="text-sm font-normal">안혁환</span>
        </div>
        <div className="w-px h-8 bg-gray-300" />
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-primary-100 text-primary-800 px-6 py-3 rounded-lg text-center">
              <p className="font-semibold">훈련교사</p>
              <p className="text-sm">이애본</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-center">
              <p className="font-semibold">행정</p>
              <p className="text-sm">관리부</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DocumentsContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">기관증빙서류</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          '사업자등록증명서', '학원운영등록증', '학원배상책임보험',
          '국세납부증명서', '지방세납세증명서', '4대보험 가입내역',
          '기업신용정보조회서', '개인신용정보조회서'
        ].map((doc) => (
          <div key={doc} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FileText className="w-5 h-5 text-primary-500 flex-shrink-0" />
            <span className="text-sm text-gray-700">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RegulationsContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">운영규정 (경영원칙)</h3>
      <div className="space-y-3">
        {[
          { title: '기관운영규정', desc: '코리아IT아카데미 운영에 관한 기본 규정' },
          { title: '훈련운영절차서', desc: '직업능력개발훈련 운영 절차 및 프로세스' },
          { title: '특성화전략 (추진계획)', desc: '기관 특성화를 위한 중장기 추진 계획' },
          { title: '문서관리규정', desc: '기관 내 문서의 작성, 보관, 폐기 관련 규정' },
          { title: '문서보관보존규정', desc: '문서 보관 및 보존 기간에 관한 규정' },
        ].map((item) => (
          <div key={item.title} className="p-4 border rounded-lg hover:border-primary-200 hover:bg-primary-50/30 transition-colors">
            <h4 className="font-medium text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SecurityContent() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">정보보안 규정/매뉴얼</h3>
      <div className="space-y-3">
        {[
          { title: '정보보안 규정', icon: Shield },
          { title: '정보보안 및 관리 매뉴얼', icon: Shield },
          { title: '비상연락망', icon: MapPin },
          { title: '부정훈련예방자료', icon: FileText },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary-200 transition-colors">
            <item.icon className="w-5 h-5 text-primary-500" />
            <span className="text-sm font-medium text-gray-700">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const tabs = [
    { label: '기관소개', content: <IntroContent /> },
    { label: '경영원칙', content: <ManagementContent /> },
    { label: '조직도', content: <OrgChartContent /> },
    { label: '기관증빙서류', content: <DocumentsContent /> },
    { label: '운영규정', content: <RegulationsContent /> },
    { label: '정보보안', content: <SecurityContent /> },
    { label: '장기/중기/단기계획', content: <PlaceholderContent title="장기/중기/단기계획" /> },
    { label: '연간교육훈련 운영계획', content: <PlaceholderContent title="연간교육훈련 운영계획" /> },
    { label: '교직원 워크샵', content: <PlaceholderContent title="교직원 워크샵" /> },
    { label: '개인정보실태점검', content: <PlaceholderContent title="개인정보실태점검" /> },
    { label: '개인정보보안 관리대장', content: <PlaceholderContent title="개인정보보안 관리대장" /> },
    { label: '인근지역 환경분석', content: <PlaceholderContent title="인근지역 환경분석" /> },
  ]

  return (
    <TabLayout
      title="Ⅰ. 기관경영"
      subtitle="코리아IT아카데미 기관경영 관련 자료"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub01}
    />
  )
}
