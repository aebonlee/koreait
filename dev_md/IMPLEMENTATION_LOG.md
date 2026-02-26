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

## 빌드 결과 (최신)
- `npm run build` 성공
- JS 번들: 711.33 KB (gzip: 199.76 KB)
- CSS 번들: 24.17 KB (gzip: 5.09 KB)
- 빌드 시간: ~6.6초

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
