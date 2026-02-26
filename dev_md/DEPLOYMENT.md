# 배포 가이드

## GitHub Pages 배포

### 배포 아키텍처

```
main 브랜치 (소스코드)
  ↓ push
GitHub Actions (deploy.yml)
  ↓ npm ci → npm run build
  ↓ peaceiris/actions-gh-pages@v4
gh-pages 브랜치 (빌드 결과물)
  ↓ GitHub Pages 서빙
https://koreait.dreamitbiz.com
```

### 1. GitHub Repository 설정

1. 리포지토리: `aebonlee/koreait`
2. Repository Settings → Pages → Source: **Deploy from a branch**
3. Branch: **gh-pages** / **/ (root)**

### 2. GitHub Secrets 설정

Repository Settings → Secrets and variables → Actions → New repository secret:

- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL (선택 - 없으면 Mock 데이터 사용)
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key (선택 - 없으면 Mock 데이터 사용)

### 3. 배포 실행

```bash
# 로컬에서 빌드 테스트
npm run build

# GitHub에 push하면 자동 배포
git add .
git commit -m "Deploy koreait dashboard"
git push origin main
```

배포 프로세스:
1. `main` 브랜치에 push 시 GitHub Actions 자동 실행
2. `peaceiris/actions-gh-pages@v4`가 빌드 결과물을 `gh-pages` 브랜치에 push
3. GitHub Pages가 `gh-pages` 브랜치에서 사이트 서빙
4. CDN 캐시로 인해 반영까지 최대 10분 소요 가능

### 4. 커스텀 도메인 설정

1. DNS 설정: `koreait.dreamitbiz.com` → CNAME → `aebonlee.github.io`
2. `public/CNAME` 파일에 도메인 명시 (이미 설정됨)
3. `deploy.yml`에서 `cname: koreait.dreamitbiz.com` 설정 (이미 설정됨)
4. GitHub Pages → Custom domain → `koreait.dreamitbiz.com` 입력
5. Enforce HTTPS 체크

### 5. SPA 라우팅 처리

GitHub Pages는 SPA 라우팅을 기본 지원하지 않음.
deploy.yml에서 `dist/index.html`을 `dist/404.html`로 복사하여 해결.

### 6. deploy.yml 구조

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: write  # gh-pages 브랜치에 push 필요

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout → Setup Node 20 → npm ci → npm run build
      - Copy 404.html for SPA routing
      - peaceiris/actions-gh-pages@v4 (publish_dir: ./dist)
```

### 7. 트러블슈팅

| 문제 | 원인 | 해결 |
|------|------|------|
| 빈 페이지 표시 | Supabase 환경변수 없이 createClient 호출 | `supabaseEnabled` 가드 추가 |
| JS/CSS 404 | Pages가 main 브랜치 루트에서 서빙 | gh-pages 브랜치 배포로 변경 |
| 새 배포 미반영 | CDN 캐시 (max-age: 600) | Pages API로 rebuild 트리거 또는 10분 대기 |
| 서브라우트 404 | GitHub Pages SPA 미지원 | 404.html = index.html 복사 |

## 로컬 개발

```bash
# 의존성 설치
npm install

# 환경변수 설정 (선택 - 없으면 Mock 데이터 사용)
cp .env.example .env
# .env 파일에 Supabase URL과 Key 입력

# 개발 서버 실행
npm run dev
```

개발 서버: http://localhost:3000
