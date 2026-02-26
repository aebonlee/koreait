# KoreaIT Dashboard - 프로젝트 구조

## 기술 스택
- **React 18** + Vite (빌드 도구)
- **Tailwind CSS** (스타일링)
- **Supabase** (Auth + PostgreSQL + Storage)
- **Recharts** (차트 라이브러리)
- **Lucide React** (아이콘)
- **React Router DOM v6** (라우팅)

## 디렉토리 구조

```
D:\koreait/
├── public/
│   ├── CNAME                    # koreait.dreamitbiz.com
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                  # StatCard, Button, Card, Badge, Modal, Input, Spinner
│   │   ├── layout/              # DashboardLayout, Sidebar, TopNav, Footer
│   │   ├── charts/              # BarChartCard, LineChartCard, PieChartCard, AreaChartCard
│   │   ├── dashboard/           # KPISection, RecentNews, PartnerGrid, ActivityTimeline
│   │   └── common/              # AuthGuard, AdminGuard, TabLayout, LoadingSkeleton
│   ├── pages/
│   │   ├── DashboardPage.jsx    # 메인 대시보드 (홈페이지)
│   │   ├── AboutPage.jsx        # Ⅰ. 기관경영 (2024/sub01 참고)
│   │   ├── CoursesPage.jsx      # Ⅱ. 훈련과정관리 (2024/sub02 참고)
│   │   ├── StaffPage.jsx        # Ⅲ. 훈련전담인력 (2024/sub03 참고)
│   │   ├── InfraPage.jsx        # Ⅳ. 훈련인프라 (2024/sub04 참고)
│   │   ├── StudentPage.jsx      # Ⅴ. 훈련생관리 (2024/sub05 참고)
│   │   ├── ProgramsPage.jsx     # Ⅵ. 훈련과정 목록 (2024/sub06 참고)
│   │   ├── ReferencePage.jsx    # Ⅶ. 참고자료 (2024/sub07 참고)
│   │   ├── EvaluationPage.jsx   # Ⅷ. 실적평가 (2024/sub08 참고)
│   │   ├── NewsPage.jsx         # 공지사항/뉴스
│   │   ├── ContactPage.jsx      # 연락처/위치
│   │   ├── LoginPage.jsx        # 로그인 (Google/Kakao/Email)
│   │   ├── RegisterPage.jsx     # 회원가입
│   │   ├── AdminDashboardPage.jsx # 관리자 패널
│   │   └── NotFoundPage.jsx     # 404
│   ├── contexts/
│   │   └── AuthContext.jsx      # Supabase 인증 컨텍스트
│   ├── hooks/
│   │   ├── useAuth.js           # 인증 훅 (re-export)
│   │   └── useDashboardData.js  # 대시보드 데이터 로딩 훅
│   ├── services/
│   │   ├── supabase.js          # Supabase 클라이언트
│   │   ├── authService.js       # 인증 함수들
│   │   ├── dashboardService.js  # 대시보드 데이터 API
│   │   └── storageService.js    # Supabase Storage
│   ├── config/
│   │   └── admin.js             # 관리자 이메일 설정
│   ├── utils/
│   │   ├── cn.js                # clsx + tailwind-merge
│   │   ├── formatNumber.js      # 숫자/날짜 포맷
│   │   └── constants.js         # 네비게이션 항목, 색상 등
│   ├── styles/
│   │   └── index.css            # Tailwind directives + 글로벌 스타일
│   ├── App.jsx                  # 라우트 설정
│   └── main.jsx                 # 엔트리 포인트
├── .env.example                 # 환경변수 예시
├── .github/workflows/deploy.yml # GitHub Pages 배포
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 라우트 구조

| 경로 | 컴포넌트 | 레이아웃 | 인증 |
|------|----------|----------|------|
| `/` | DashboardPage | DashboardLayout | - |
| `/about` | AboutPage | DashboardLayout | - |
| `/courses` | CoursesPage | DashboardLayout | - |
| `/staff` | StaffPage | DashboardLayout | - |
| `/infra` | InfraPage | DashboardLayout | - |
| `/students` | StudentPage | DashboardLayout | - |
| `/programs` | ProgramsPage | DashboardLayout | - |
| `/reference` | ReferencePage | DashboardLayout | - |
| `/evaluation` | EvaluationPage | DashboardLayout | - |
| `/news` | NewsPage | DashboardLayout | - |
| `/contact` | ContactPage | DashboardLayout | - |
| `/login` | LoginPage | None | - |
| `/register` | RegisterPage | None | - |
| `/admin/*` | AdminDashboardPage | DashboardLayout | AdminGuard |

## 색상 체계

- **Primary**: Indigo (#3f51b5) - 2024 사이트 헤더 색상
- **Accent Cyan**: #2ddbdc
- **Accent Purple**: #ac8bef
- **Sidebar**: Dark (#1E293B)
- **Tab Active**: Primary-500

## 2024 사이트 대비 변환

| 2024 (PHP) | 새 사이트 (React) |
|------------|------------------|
| nav.php 사이드바 | Sidebar.jsx (Lucide 아이콘) |
| 라디오버튼 탭 | TabLayout.jsx (React 상태 관리) |
| jQuery 토글 메뉴 | React 상태 + Tailwind 전환 |
| 그누보드 로그인 | Supabase Auth (OAuth + Email) |
| PHP 포함 파일 | React 컴포넌트 import |
| PDF 임베드 | 카드/테이블 형태 콘텐츠 |
