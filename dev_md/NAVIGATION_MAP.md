# 네비게이션 맵 (2024 PHP → React 변환)

## 사이드바 메뉴 구조

### 2024 PHP (nav.php) → React (Sidebar.jsx)

| # | 2024 PHP 메뉴 | React 경로 | 컴포넌트 | Lucide 아이콘 |
|---|--------------|-----------|---------|-------------|
| - | 홈 (index.php) | `/` | DashboardPage | LayoutDashboard |
| 1 | 기관경영 (sub01) | `/about` | AboutPage | Building2 |
| 2 | 훈련운영관리 (sub02) | `/courses` | CoursesPage | ClipboardList |
| 3 | 훈련전담인력 (sub03) | `/staff` | StaffPage | Users |
| 4 | 훈련인프라 (sub04) | `/infra` | InfraPage | Server |
| 5 | 훈련생관리 (sub05) | `/students` | StudentPage | UserCircle |
| 6 | 2023년훈련과정 (sub06) | `/programs` | ProgramsPage | BookOpen |
| 7 | 참고자료 (sub07) | `/reference` | ReferencePage | FolderOpen |
| 8 | 실적평가 (sub08) | `/evaluation` | EvaluationPage | BarChart3 |

### sub01 탭 변환

| 2024 PHP 탭 | React 탭 (AboutPage) |
|-------------|---------------------|
| 에듀컴퓨터교육학원 소개 | 기관소개 |
| 경영원칙 | 경영원칙 |
| 조직도(직제규정) | 조직도 |
| 조직체계도 | (조직도 탭 내 포함) |
| 시설평면도 | (기관증빙서류 탭 내 포함) |
| 현장평가주소 약도 | (기관증빙서류 탭 내 포함) |

### sub02 탭 변환

| 2024 PHP 메뉴 | React 탭 (CoursesPage) |
|---------------|----------------------|
| 훈련과정개발절차 | 훈련과정 개발절차 |
| 훈련수요 및 요구조사 | 훈련수요 및 요구조사 |
| 훈련운영규정 | 훈련운영규정 |
| 훈련과정개발내역 | 훈련과정 개발내역 |

### sub03 탭 변환

| 2024 PHP 메뉴 | React 탭 (StaffPage) |
|---------------|---------------------|
| 업무분장규정(분장표) | 업무분장규정 |
| 교직원 프로필 (원장/부원장/교사) | 교직원 프로필 |
| 직무평가/역량개발 | 직무평가/역량개발 |

### sub06 과정 목록

| 2024 PHP | React 탭 (ProgramsPage) |
|----------|------------------------|
| [ITQ] 엑셀, 프레젠테이션, 한글, 컴활2급 | 사무행정 (ITQ/컴활) |
| [GTQ] 포토샵, 일러스트레이터 | 그래픽 (GTQ) |
| [AutoCAD] 기계/건축 설계 | CAD 설계 |
| Web/Blog/웹표준 | 웹/블로그 |
| 파이썬과 R프로그래밍 | 프로그래밍 |
