import {
  LayoutDashboard,
  Building2,
  ClipboardList,
  Users,
  Server,
  UserCircle,
  BookOpen,
  FolderOpen,
  BarChart3,
  Newspaper,
  MapPin,
  Settings
} from 'lucide-react'

export const NAV_ITEMS = [
  { path: '/', label: '대시보드', icon: LayoutDashboard, section: 'main' },
  {
    path: '/about', label: 'Ⅰ. 기관경영', icon: Building2, section: 'sub01',
    children: [
      { label: '기관소개', tab: 0 },
      { label: '경영원칙', tab: 1 },
      { label: '조직도', tab: 2 },
      { label: '기관증빙서류', tab: 3 },
      { label: '운영규정', tab: 4 },
      { label: '정보보안', tab: 5 },
      { label: '장기/중기/단기계획', tab: 6 },
      { label: '연간교육훈련 운영계획', tab: 7 },
      { label: '교직원 워크샵', tab: 8 },
      { label: '개인정보실태점검', tab: 9 },
      { label: '개인정보보안 관리대장', tab: 10 },
      { label: '인근지역 환경분석', tab: 11 },
    ],
  },
  {
    path: '/courses', label: 'Ⅱ. 훈련과정관리', icon: ClipboardList, section: 'sub02',
    children: [
      { label: '훈련과정 개발절차', tab: 0 },
      { label: '훈련수요 및 요구조사', tab: 1 },
      { label: '훈련운영규정', tab: 2 },
      { label: '훈련과정 개발내역', tab: 3 },
      { label: '훈련과정개발매뉴얼', tab: 4 },
      { label: '교육훈련 운영계획서', tab: 5 },
      { label: '교육훈련 운영 회의록', tab: 6 },
      { label: '훈련과정일정 수립', tab: 7 },
      { label: '홍보계획수립(실행)', tab: 8 },
      { label: '이수자평가관련서류', tab: 9 },
      { label: '성취도평가규정', tab: 10 },
      { label: '성취도평가결과분석표', tab: 11 },
      { label: '훈련과정 개선 및 반영', tab: 12 },
    ],
  },
  {
    path: '/staff', label: 'Ⅲ. 훈련전담인력', icon: Users, section: 'sub03',
    children: [
      { label: '업무분장규정', tab: 0 },
      { label: '교직원 프로필', tab: 1 },
      { label: '직무평가/역량개발', tab: 2 },
      { label: '교직원업무분장', tab: 3 },
      { label: '교직원직무평가', tab: 4 },
      { label: '인센티브 지급내역', tab: 5 },
      { label: '채용공고/선발기준', tab: 6 },
      { label: 'KoreaIT 취업규칙', tab: 7 },
      { label: '예비인력풀 구축', tab: 8 },
      { label: '교직원 만족도조사', tab: 9 },
    ],
  },
  {
    path: '/infra', label: 'Ⅳ. 훈련인프라', icon: Server, section: 'sub04',
    children: [
      { label: '안전관리 규정', tab: 0 },
      { label: '안전교육/참고자료', tab: 1 },
      { label: '훈련시설 현황', tab: 2 },
      { label: '훈련장비 현황', tab: 3 },
      { label: 'SW 관리대장', tab: 4 },
      { label: '안전관리 구난장비', tab: 5 },
      { label: '안전관리 점검 내역', tab: 6 },
      { label: '훈련시설 관리 내역', tab: 7 },
      { label: '훈련장비 관리 내역', tab: 8 },
    ],
  },
  {
    path: '/students', label: 'Ⅴ. 훈련생관리', icon: UserCircle, section: 'sub05',
    children: [
      { label: '교육훈련 체계도', tab: 0 },
      { label: '모집/홍보', tab: 1 },
      { label: '취업지원', tab: 2 },
      { label: 'KoreaIT 갤러리', tab: 3 },
      { label: '연간 개강계획', tab: 4 },
      { label: '훈련생모집 홍보자료', tab: 5 },
      { label: '과정운영실적', tab: 6 },
      { label: '훈련생 위탁기관', tab: 7 },
      { label: '훈련생 고충처리', tab: 8 },
      { label: '훈련생 상담내역', tab: 9 },
      { label: '훈련생 사후관리', tab: 10 },
      { label: '과정별 만족도조사', tab: 11 },
      { label: '자격증 시험관리', tab: 12 },
      { label: '훈련생 지원내역', tab: 13 },
      { label: '훈련생 선발관련', tab: 14 },
    ],
  },
  {
    path: '/programs', label: 'Ⅵ. 훈련과정', icon: BookOpen, section: 'sub06',
    children: [
      { label: '사무행정 (ITQ/컴활)', tab: 0 },
      { label: '그래픽 (GTQ)', tab: 1 },
      { label: 'CAD 설계', tab: 2 },
      { label: '웹/블로그', tab: 3 },
      { label: '프로그래밍', tab: 4 },
    ],
  },
  {
    path: '/reference', label: 'Ⅶ. 참고자료', icon: FolderOpen, section: 'sub07',
    children: [
      { label: '법령자료', tab: 0 },
      { label: '교직원 연수자료', tab: 1 },
      { label: 'KSQA 정보수집', tab: 2 },
      { label: '강의자료/교안', tab: 3 },
      { label: '학원 서식', tab: 4 },
    ],
  },
  {
    path: '/evaluation', label: 'Ⅷ. 실적평가', icon: BarChart3, section: 'sub08',
    children: [
      { label: '실적평가 개요', tab: 0 },
      { label: '연도별 실적', tab: 1 },
      { label: '자체평가보고서', tab: 2 },
    ],
  },
]

export const EXTRA_NAV_ITEMS = [
  { path: '/news', label: '공지사항', icon: Newspaper },
  { path: '/contact', label: '오시는길', icon: MapPin },
]

export const ADMIN_NAV_ITEMS = [
  { path: '/admin', label: '관리자 패널', icon: Settings },
]

export const CHART_COLORS = {
  primary: '#3f51b5',
  cyan: '#2ddbdc',
  purple: '#ac8bef',
  green: '#10b981',
  orange: '#f59e0b',
  red: '#ef4444',
  blue: '#3b82f6',
}

export const SECTION_COLORS = {
  sub01: '#ef4444',
  sub02: '#f59e0b',
  sub03: '#eab308',
  sub04: '#22c55e',
  sub05: '#3b82f6',
  sub06: '#2563eb',
  sub07: '#7c3aed',
  sub08: '#eab308',
}
