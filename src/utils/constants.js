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
  { path: '/about', label: 'Ⅰ. 기관경영', icon: Building2, section: 'sub01' },
  { path: '/courses', label: 'Ⅱ. 훈련과정관리', icon: ClipboardList, section: 'sub02' },
  { path: '/staff', label: 'Ⅲ. 훈련전담인력', icon: Users, section: 'sub03' },
  { path: '/infra', label: 'Ⅳ. 훈련인프라', icon: Server, section: 'sub04' },
  { path: '/students', label: 'Ⅴ. 훈련생관리', icon: UserCircle, section: 'sub05' },
  { path: '/programs', label: 'Ⅵ. 훈련과정', icon: BookOpen, section: 'sub06' },
  { path: '/reference', label: 'Ⅶ. 참고자료', icon: FolderOpen, section: 'sub07' },
  { path: '/evaluation', label: 'Ⅷ. 실적평가', icon: BarChart3, section: 'sub08' },
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
