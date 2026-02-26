# Supabase 설정 가이드

## 1. 프로젝트 생성

1. [supabase.com](https://supabase.com)에서 새 프로젝트 생성
2. Project URL과 anon key를 `.env` 파일에 설정:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 2. 인증 설정

### Google OAuth
1. Supabase Dashboard → Authentication → Providers → Google
2. Google Cloud Console에서 OAuth 2.0 Client ID 생성
3. Redirect URL: `https://your-project.supabase.co/auth/v1/callback`

### Kakao OAuth
1. Supabase Dashboard → Authentication → Providers → Kakao
2. Kakao Developers에서 앱 생성 및 키 설정
3. Redirect URL: `https://your-project.supabase.co/auth/v1/callback`

## 3. 데이터베이스 테이블

### user_profiles
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

### kpi_stats
```sql
CREATE TABLE kpi_stats (
  id SERIAL PRIMARY KEY,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  change TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE kpi_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON kpi_stats FOR SELECT TO anon, authenticated USING (true);
```

### courses
```sql
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  cert_type TEXT,
  hours INTEGER,
  description TEXT,
  student_count INTEGER DEFAULT 0,
  completion_rate NUMERIC(5,2) DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON courses FOR SELECT TO anon, authenticated USING (true);
```

### enrollment_stats
```sql
CREATE TABLE enrollment_stats (
  id SERIAL PRIMARY KEY,
  month TEXT NOT NULL,
  new_students INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0,
  year INTEGER DEFAULT EXTRACT(YEAR FROM NOW()),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE enrollment_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON enrollment_stats FOR SELECT TO anon, authenticated USING (true);
```

### employment_stats
```sql
CREATE TABLE employment_stats (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  value NUMERIC(5,1) NOT NULL,
  year INTEGER DEFAULT EXTRACT(YEAR FROM NOW()),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE employment_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON employment_stats FOR SELECT TO anon, authenticated USING (true);
```

### news
```sql
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  category TEXT DEFAULT '공지',
  date DATE DEFAULT CURRENT_DATE,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON news FOR SELECT TO anon, authenticated USING (true);
```

### partners
```sql
CREATE TABLE partners (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  logo_url TEXT,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON partners FOR SELECT TO anon, authenticated USING (true);
```

### activity_log
```sql
CREATE TABLE activity_log (
  id SERIAL PRIMARY KEY,
  action TEXT NOT NULL,
  type TEXT,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access" ON activity_log FOR SELECT TO anon, authenticated USING (true);
```

## 4. Storage 버킷

```sql
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Authenticated upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
```

## 5. 관리자 설정

`src/config/admin.js` 파일에서 관리자 이메일을 설정합니다:

```js
export const ADMIN_EMAILS = [
  'aebonlee@gmail.com',
  'admin@educomputer.co.kr',
]
```
