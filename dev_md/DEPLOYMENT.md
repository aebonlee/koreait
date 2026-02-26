# 배포 가이드

## GitHub Pages 배포

### 1. GitHub Repository 설정

1. GitHub에서 `aebonlee/koreait` 리포지토리 생성 (또는 기존 사용)
2. Repository Settings → Pages → Source: GitHub Actions

### 2. GitHub Secrets 설정

Repository Settings → Secrets and variables → Actions → New repository secret:

- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key

### 3. 배포 실행

```bash
# 로컬에서 빌드 테스트
npm run build

# GitHub에 push하면 자동 배포
git add .
git commit -m "Deploy koreait dashboard"
git push origin main
```

### 4. 커스텀 도메인 설정

1. DNS 설정: `koreait.dreamitbiz.com` → CNAME → `aebonlee.github.io`
2. `public/CNAME` 파일에 도메인 명시 (이미 설정됨)
3. GitHub Pages → Custom domain → `koreait.dreamitbiz.com` 입력
4. Enforce HTTPS 체크

### 5. SPA 라우팅 처리

GitHub Pages는 SPA 라우팅을 기본 지원하지 않음.
deploy.yml에서 `dist/index.html`을 `dist/404.html`로 복사하여 해결.

## 로컬 개발

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env
# .env 파일에 Supabase URL과 Key 입력

# 개발 서버 실행
npm run dev
```

개발 서버: http://localhost:3000
