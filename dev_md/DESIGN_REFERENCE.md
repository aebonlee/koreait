# 디자인 레퍼런스

## 2024 사이트 색상 체계

### 메인 색상 (CSS에서 추출)
- **Header Background**: `#3f51b5` (Indigo) - `#hd_top`, `.btn_03`, `.pg_current`
- **Logo Background**: `#2f409f` (Darker Indigo) - `#logo`
- **Sidebar Background**: `#ebebeb` (Light Gray) - `#gnb .gnb_ul`
- **Active Menu Color**: `#435ffe` (Bright Blue) - link hover
- **Button Primary**: `#3f51b5` - `.btn_03`
- **Button Submit**: `#ff4081` (Pink) - `.btn_submit`
- **Background**: `#fff` (White) - body

### 섹션별 구분선 색상
- sub01 (기관경영): `#f00` (Red) - opacity 0.4
- sub02 (훈련과정관리): `orange` - opacity 0.4
- sub03 (훈련전담인력): `#FCF05C` (Yellow) - opacity 0.9
- sub04 (훈련인프라): `green` - opacity 0.4
- sub05 (훈련생관리): `#4A9EE7` (Blue) - opacity 0.4
- sub06 (훈련과정): `#2C67D1` (Dark Blue) - opacity 0.4
- sub07 (참고자료): `purple` - opacity 0.4
- sub08 (실적평가): `#FCF05C` (Yellow) - opacity 0.9

### 폰트
- Primary: 'Malgun Gothic', "맑은 고딕", AppleGothic, Dotum, sans-serif
- New site: 'Noto Sans KR' + 'Malgun Gothic' (Google Fonts CDN)

## 레이아웃 구조

### 2024 사이트
```
┌─────────────────────────────────┐
│  #hd_top (Fixed, bg-gray-800)  │  ← h:50px, z:1000
├──────┬──────────────────────────┤
│ #gnb │  #container              │
│ 50px │  padding-left: 220px     │
│ icons│  margin-top: 100px       │
│      │                          │
│ sub  │  #container_title        │
│ menu │  .container_wr           │
│ 170px│    #contents             │
│      │      #tabMenu            │
│      │                          │
├──────┴──────────────────────────┤
│  #ft (Fixed bottom)            │
└─────────────────────────────────┘
```

### 새 사이트 (React)
```
┌─────────────────────────────────┐
│  TopNav (Fixed, bg-white)      │  ← h:64px, z:30
├──────┬──────────────────────────┤
│      │                          │
│ Side │  Main Content Area       │
│ bar  │  (Outlet)                │
│ 60px │                          │
│  or  │  - Page Header           │
│ 240px│  - Tab Layout / Cards    │
│      │  - Charts / Tables       │
│ Dark │                          │
│ #1E  │                          │
│ 293B │                          │
├──────┴──────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

## 기존 사이트 주요 이미지
- `educom.JPG` - 학원 외관 사진
- `kim1.png` - 원장 서명
- `kim2.png` - 부원장 서명
- `lee1.png` - 훈련교사 서명
- `pic1.png ~ pic7.png` - 섹션별 대표 이미지 (캐러셀용)
- `logo.png` - 학원 로고
