# 구현 로그

## 2026-02-26 - 초기 구현

### 완료 항목

1. **프로젝트 초기화** (Step 1)
   - Vite + React 프로젝트 구성
   - Tailwind CSS + PostCSS 설정
   - 의존성: React Router, Supabase, Recharts, Lucide React, clsx, tailwind-merge

2. **레이아웃 + 라우팅** (Step 2)
   - DashboardLayout: 접이식 사이드바 + 콘텐츠 영역
   - Sidebar: 2024 nav.php의 8개 메뉴를 Lucide 아이콘으로 변환
   - TopNav: 검색, 알림, 사용자 메뉴
   - Footer: 저작권 정보
   - React Router 전체 라우트 설정 (14개 페이지)

3. **Supabase + 인증** (Step 3)
   - supabase.js: PKCE flow, auto-refresh, persistent sessions
   - authService.js: Google/Kakao OAuth + Email 로그인
   - AuthContext: onAuthStateChange + 프로필 자동 로드
   - AuthGuard / AdminGuard: 라우트 보호
   - admin.js: 관리자 이메일 설정
   - LoginPage / RegisterPage

4. **대시보드** (Step 4)
   - KPISection: 4개 KPI 카드 (총수강생, 취업률, 운영과정, 협력기관)
   - LineChartCard: 월별 수강 추이
   - PieChartCard: 취업 현황
   - BarChartCard: 과정별 수강생
   - RecentNews: 최근 5개 뉴스
   - PartnerGrid: 8개 협력기관
   - ActivityTimeline: 최근 5개 활동
   - Mock 데이터 제공 (Supabase 연동 전)

5. **섹션 페이지** (Step 5)
   - TabLayout: 공통 탭 컴포넌트
   - AboutPage: 기관소개, 경영원칙, 조직도, 증빙서류, 운영규정, 정보보안
   - CoursesPage: 개발절차, 수요조사, 운영규정, 개발내역
   - StaffPage: 업무분장, 교직원프로필, 직무평가
   - InfraPage: 안전관리, 안전교육, 시설현황, 장비현황, SW관리
   - StudentPage: 체계도, 모집홍보, 취업지원, 갤러리
   - ProgramsPage: 사무행정, 그래픽, CAD, 웹, 프로그래밍 과정
   - ReferencePage: 법령, 연수자료, KSQA, 교안, 서식
   - EvaluationPage: 실적개요, 연도별실적, 자체평가

6. **추가 페이지** (Step 6)
   - NewsPage: 카테고리 필터링 + 뉴스 목록
   - ContactPage: 연락처, 약도, 교통안내
   - NotFoundPage: 404 에러
   - AdminDashboardPage: KPI/과정/뉴스/협력기관/이미지 CRUD UI

7. **배포 설정** (Step 7)
   - GitHub Actions workflow (deploy.yml)
   - CNAME 파일 (koreait.dreamitbiz.com)
   - 404.html SPA 라우팅 처리
   - .env.example, .gitignore

**커밋**: `15c3147` feat: KoreaIT 대시보드 포트폴리오 사이트 초기 구현

---

## 2026-02-26 - 빈 페이지 수정 (핫픽스)

### 문제
- 배포된 사이트(koreait.dreamitbiz.com)에서 아무것도 표시되지 않음
- 원인: Supabase 환경변수 미설정 시 `createClient('', '')` 호출로 전체 앱 크래시

### 수정 내용
1. **supabase.js**: `supabaseEnabled` 플래그 추가, 환경변수 없으면 `supabase = null`
2. **AuthContext.jsx**: `!supabaseEnabled` 시 즉시 `setLoading(false)` 반환
3. **authService.js**: 모든 함수에 `requireSupabase()` 가드 추가
4. **dashboardService.js**: 모든 fetch 함수에 `if (!supabaseEnabled) return MOCK_DATA` 가드 추가
5. **storageService.js**: `requireSupabase()` 가드 추가
6. **useCourses.js / useNews.js**: `supabaseEnabled` 체크 추가

### 핵심 패턴
```js
// supabase.js
export const supabaseEnabled = !!(supabaseUrl && supabaseAnonKey)
export const supabase = supabaseEnabled ? createClient(...) : null

// dashboardService.js - 각 함수에서
if (!supabaseEnabled) return MOCK_DATA

// authService.js - 각 함수에서
function requireSupabase() {
  if (!supabaseEnabled) throw new Error('Supabase가 설정되지 않았습니다.')
}
```

**커밋**: `bd72b43` fix: Supabase 미설정 시 앱 크래시 방지 (빈 페이지 수정)

---

## 2026-02-26 - 배포 방식 변경

### 문제
- GitHub Pages가 `main` 브랜치 루트에서 서빙 → 빌드 안 된 `index.html` (src/main.jsx 참조)

### 수정 내용
- `deploy.yml`에서 `actions/deploy-pages` → `peaceiris/actions-gh-pages@v4` 변경
- 빌드 결과물을 `gh-pages` 브랜치에 푸시
- GitHub Pages Source를 `gh-pages` 브랜치로 변경 (API 호출)
- Pages rebuild 트리거하여 배포 완료 확인

**커밋**: `4074d7c` fix: gh-pages 브랜치 배포 방식으로 변경

---

## 2026-02-26 - 사이드바 드롭다운 메뉴 추가

### 구현 내용
1. **constants.js**: NAV_ITEMS에 `children` 배열 추가 (각 섹션별 탭 항목)
2. **Sidebar.jsx**: `NavItem` 컴포넌트 신규 작성
   - 부모 메뉴 클릭 시 드롭다운 열기/닫기 토글
   - ChevronDown 아이콘 회전 애니메이션
   - 하위 항목 클릭 시 `?tab=N` 쿼리와 함께 해당 페이지로 이동
   - 현재 페이지 섹션이면 자동으로 드롭다운 펼침
   - 왼쪽 세로선(`border-l border-gray-700`) + 들여쓰기로 계층 표시
   - 사이드바 접힘 시 드롭다운 숨김
3. **TabLayout.jsx**: URL `?tab=N` 쿼리 파라미터로 초기 탭 설정
   - `useSearchParams` 훅으로 탭 인덱스 읽기
   - 탭 클릭 시 URL 쿼리 업데이트 (`replace: true`)

### 드롭다운 하위 항목 목록

| 섹션 | 하위 항목 |
|------|----------|
| Ⅰ. 기관경영 | 기관소개, 경영원칙, 조직도, 기관증빙서류, 운영규정, 정보보안 |
| Ⅱ. 훈련과정관리 | 훈련과정 개발절차, 훈련수요 및 요구조사, 훈련운영규정, 훈련과정 개발내역 |
| Ⅲ. 훈련전담인력 | 업무분장규정, 교직원 프로필, 직무평가/역량개발 |
| Ⅳ. 훈련인프라 | 안전관리 규정, 안전교육/참고자료, 훈련시설 현황, 훈련장비 현황, SW 관리대장 |
| Ⅴ. 훈련생관리 | 교육훈련 체계도, 모집/홍보, 취업지원, KoreaIT 갤러리 |
| Ⅵ. 훈련과정 | 사무행정 (ITQ/컴활), 그래픽 (GTQ), CAD 설계, 웹/블로그, 프로그래밍 |
| Ⅶ. 참고자료 | 법령자료, 교직원 연수자료, KSQA 정보수집, 강의자료/교안, 학원 서식 |
| Ⅷ. 실적평가 | 실적평가 개요, 연도별 실적, 자체평가보고서 |

**커밋**: `69bcedf` feat: 사이드바 드롭다운 메뉴 추가

---

## 2026-02-26 - 사이드바 스타일 & UX 개선

### 수정 내용
1. **폰트 가시성 향상**: 사이드바 메뉴 폰트를 더 밝고 굵게 변경
   - 부모 메뉴: `text-gray-400` → `text-gray-200` + `font-semibold`
   - 하위 항목: `text-gray-500` → `text-gray-300` + `font-medium`
2. **아코디언 동작**: 드롭다운 메뉴가 하나만 열리도록 수정
   - `openPath` 상태를 NavItem에서 Sidebar 부모로 리프팅
3. **자동 닫힘**: 다른 페이지 이동 시 드롭다운 자동 접힘
   - `useEffect`로 `location.pathname` 감시하여 `openPath` 자동 동기화

**커밋**: `6d82bf5` ~ `8e94e9e` (style + fix 3건)

---

## 2026-02-27 - 브랜딩 통일 (명칭/주소/사업자정보)

### 수정 내용
1. **명칭 변경**: `에듀컴퓨터교육학원` → `코리아IT아카데미` (11개 파일)
2. **주소 변경**: 경기도 시흥시 배곧 주소 → `서울특별시 마포구 서강로 136 아이비타워 2층, 3층`
3. **사업자 정보 반영** (Footer, ContactPage, StaffPage, admin.js):
   - 사업자(법인)명: ㈜코리아정보보안아이티아카데미신촌
   - 사업자번호: 325-88-00678
   - 통신판매업번호: 제2019-서울마포-0303호
   - 대표자: 김홍구 / 개인정보책임자: 최인욱
   - 학원명: 코리아아이티(IT)아카데미학원
   - 학원등록번호: 서울서부 제02201700141호
   - 전화: 02-313-7300 / E-mail: ciu@koreaedugroup.com
   - 대표 블로그: https://blog.naver.com/sunsoo2002
4. **EduCom → KoreaIT**: 갤러리, 자위소방대 등 5개 파일 명칭 통일

### 변경 파일
- `src/components/layout/Footer.jsx` - 사업자/학원 정보 2단 레이아웃
- `src/pages/ContactPage.jsx` - 연락처 + 학원 정보 카드
- `src/pages/StaffPage.jsx` - 교직원 정보 (김홍구 대표, 최인욱 개인정보책임자)
- `src/config/admin.js` - 관리자 이메일 변경
- `src/utils/constants.js` - KoreaIT 갤러리
- `src/pages/InfraPage.jsx` - KoreaIT 자위소방대
- `src/pages/StudentPage.jsx` - KoreaIT 갤러리
- `index.html`, `src/pages/AboutPage.jsx`, `src/pages/DashboardPage.jsx`, `src/pages/LoginPage.jsx`, `src/pages/NewsPage.jsx`, `src/pages/CoursesPage.jsx`, `src/services/dashboardService.js`

**커밋**: `ee5f68b` ~ `d726c23` (refactor + update 4건)

---

## 2026-02-27 - 2024 추가예정 미개발 항목 추가

### 배경
2024 PHP 사이트(`nav.php`)의 각 섹션 하단에 "실적기관평가 대비 - 2024년 추가예정" 목록이 기재되어 있었음.
해당 미개발 항목 37개를 React 사이트에 드롭다운 메뉴 + 탭으로 추가.

### 구현 내용
1. **PlaceholderContent 공통 컴포넌트** 신규 생성 (`src/components/common/PlaceholderContent.jsx`)
   - Clock 아이콘 + "콘텐츠 준비 중입니다" + "추가예정" 배지
   - 모든 미개발 탭에서 재사용

2. **섹션별 추가 항목** (constants.js children + 각 페이지 tabs)

| 섹션 | 기존 탭 | 추가 | 총 탭 | 추가 항목 |
|------|---------|------|-------|----------|
| Ⅰ. 기관경영 | 6 | +6 | 12 | 장기/중기/단기계획, 연간교육훈련 운영계획, 교직원 워크샵, 개인정보실태점검, 개인정보보안 관리대장, 인근지역 환경분석 |
| Ⅱ. 훈련과정관리 | 4 | +9 | 13 | 훈련과정개발매뉴얼, 교육훈련 운영계획서, 교육훈련 운영 회의록, 훈련과정일정 수립, 홍보계획수립(실행), 이수자평가관련서류, 성취도평가규정, 성취도평가결과분석표, 훈련과정 개선 및 반영 |
| Ⅲ. 훈련전담인력 | 3 | +7 | 10 | 교직원업무분장, 교직원직무평가, 인센티브 지급내역, 채용공고/선발기준, KoreaIT 취업규칙, 예비인력풀 구축, 교직원 만족도조사 |
| Ⅳ. 훈련인프라 | 5 | +4 | 9 | 안전관리 구난장비, 안전관리 점검 내역, 훈련시설 관리 내역, 훈련장비 관리 내역 |
| Ⅴ. 훈련생관리 | 4 | +11 | 15 | 연간 개강계획, 훈련생모집 홍보자료, 과정운영실적, 훈련생 위탁기관, 훈련생 고충처리, 훈련생 상담내역, 훈련생 사후관리, 과정별 만족도조사, 자격증 시험관리, 훈련생 지원내역, 훈련생 선발관련 |

### 변경 파일 (7개)
- `src/components/common/PlaceholderContent.jsx` - 신규 (공통 플레이스홀더)
- `src/utils/constants.js` - 5개 섹션 children 배열에 37개 항목 추가
- `src/pages/AboutPage.jsx` - 6개 탭 추가
- `src/pages/CoursesPage.jsx` - 9개 탭 추가
- `src/pages/StaffPage.jsx` - 7개 탭 추가
- `src/pages/InfraPage.jsx` - 4개 탭 추가
- `src/pages/StudentPage.jsx` - 11개 탭 추가

### 참조 (nav.php 원본)
각 섹션의 "추가예정" 목록 위치:
- sub01: nav.php L190~198 (기관경영)
- sub02: nav.php L250~262 (훈련과정관리)
- sub03: nav.php L325~335 (훈련전담인력)
- sub04: nav.php L386~393 (훈련인프라)
- sub05: nav.php L456~470 (훈련생관리)

**커밋**: `6204fe6` feat: 2024 추가예정 미개발 항목을 드롭다운 메뉴로 추가

---

## 빌드 결과 (최신)
- `npm run build` 성공
- JS 번들: 721.99 KB (gzip: 202.03 KB)
- CSS 번들: 24.45 KB (gzip: 5.14 KB)
- 빌드 시간: ~6.4초

## 배포 현황
- **리포지토리**: https://github.com/aebonlee/koreait
- **배포 URL**: https://koreait.dreamitbiz.com
- **배포 방식**: GitHub Actions → `gh-pages` 브랜치 → GitHub Pages
- **상태**: 정상 동작 (Mock 데이터 모드)

## TODO (다음 단계)
- [ ] Supabase 프로젝트 생성 및 .env / GitHub Secrets 설정
- [ ] DB 테이블 생성 (SUPABASE_SETUP.md 참조)
- [ ] 실제 데이터 시드 (교육과정, KPI, 뉴스 등)
- [ ] 관리자 CRUD 기능 Supabase 연동
- [ ] 코드 스플리팅 (React.lazy + Suspense) - 번들 700KB 초과
- [ ] 모바일 반응형 개선 (375px, 768px 테스트)
- [ ] 2024 PHP 사이트의 실제 이미지/PDF 자료 마이그레이션
- [ ] 각 섹션 페이지 실제 콘텐츠 채우기 (현재 플레이스홀더)
- [ ] 추가예정 37개 항목 실제 콘텐츠 개발 (현재 PlaceholderContent)
