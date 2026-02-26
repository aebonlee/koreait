# 변경 이력 (CHANGELOG)

## v1.1.0 - 2026-02-26

### 새 기능
- **사이드바 드롭다운 메뉴**: 각 섹션(Ⅰ~Ⅷ)에 하위 탭 항목을 드롭다운으로 표시
  - 부모 메뉴 클릭 시 토글, 현재 페이지 자동 펼침
  - ChevronDown 아이콘 회전 애니메이션
  - 왼쪽 세로선으로 계층 구조 표시
- **탭 URL 연동**: `?tab=N` 쿼리 파라미터로 특정 탭 직접 링크 지원
  - 사이드바 하위 항목 → 해당 페이지 특정 탭 자동 선택
  - 탭 클릭 시 URL 자동 업데이트

### 변경 파일
- `src/utils/constants.js` - NAV_ITEMS에 children 배열 추가
- `src/components/layout/Sidebar.jsx` - NavItem 컴포넌트 (드롭다운 로직)
- `src/components/common/TabLayout.jsx` - useSearchParams 연동

### 커밋
- `69bcedf` feat: 사이드바 드롭다운 메뉴 추가

---

## v1.0.2 - 2026-02-26

### 버그 수정
- **배포 방식 변경**: `actions/deploy-pages` → `peaceiris/actions-gh-pages@v4`
  - 원인: GitHub Pages가 main 브랜치 루트에서 서빙 (빌드 안 된 파일)
  - 해결: gh-pages 브랜치에 빌드 결과물 배포

### 커밋
- `4074d7c` fix: gh-pages 브랜치 배포 방식으로 변경

---

## v1.0.1 - 2026-02-26

### 버그 수정
- **빈 페이지 수정**: Supabase 환경변수 미설정 시 앱 크래시 방지
  - `supabaseEnabled` 가드를 모든 서비스/훅/컨텍스트에 추가
  - Supabase 없이도 Mock 데이터로 정상 동작

### 변경 파일
- `src/services/supabase.js` - supabaseEnabled 플래그 + 조건부 createClient
- `src/contexts/AuthContext.jsx` - 비활성 시 즉시 로딩 완료
- `src/services/authService.js` - requireSupabase() 가드
- `src/services/dashboardService.js` - Mock 데이터 폴백
- `src/services/storageService.js` - requireSupabase() 가드
- `src/hooks/useCourses.js` - supabaseEnabled 체크
- `src/hooks/useNews.js` - supabaseEnabled 체크

### 커밋
- `bd72b43` fix: Supabase 미설정 시 앱 크래시 방지 (빈 페이지 수정)

---

## v1.0.0 - 2026-02-26

### 초기 릴리스
- React 18 + Vite + Tailwind CSS 프로젝트 구성
- 대시보드 (KPI 카드, 차트 4종, 뉴스, 파트너, 활동 타임라인)
- 8개 섹션 페이지 (2024 PHP 사이트 기반 탭 구조 변환)
- Supabase Auth (Google/Kakao OAuth + Email)
- 관리자 패널 (KPI/과정/뉴스/협력기관/이미지 관리 UI)
- 추가 페이지: 공지사항, 연락처, 로그인, 회원가입, 404
- GitHub Actions → GitHub Pages 자동 배포
- 커스텀 도메인: koreait.dreamitbiz.com

### 커밋
- `15c3147` feat: KoreaIT 대시보드 포트폴리오 사이트 초기 구현
