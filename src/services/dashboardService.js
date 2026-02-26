import { supabase } from './supabase'

// Mock data for initial development (before DB is seeded)
const MOCK_KPI = [
  { id: 1, label: '총 수강생', value: 1247, change: '+12%', icon: 'users' },
  { id: 2, label: '취업률', value: '78.5%', change: '+3.2%', icon: 'briefcase' },
  { id: 3, label: '운영과정', value: 24, change: '+4', icon: 'book' },
  { id: 4, label: '협력기관', value: 38, change: '+6', icon: 'building' },
]

const MOCK_ENROLLMENT = [
  { name: '1월', 신규: 45, 수료: 32 },
  { name: '2월', 신규: 52, 수료: 38 },
  { name: '3월', 신규: 68, 수료: 42 },
  { name: '4월', 신규: 61, 수료: 48 },
  { name: '5월', 신규: 73, 수료: 55 },
  { name: '6월', 신규: 82, 수료: 61 },
  { name: '7월', 신규: 76, 수료: 68 },
  { name: '8월', 신규: 89, 수료: 72 },
  { name: '9월', 신규: 95, 수료: 78 },
  { name: '10월', 신규: 88, 수료: 81 },
  { name: '11월', 신규: 92, 수료: 85 },
  { name: '12월', 신규: 78, 수료: 70 },
]

const MOCK_EMPLOYMENT = [
  { name: '취업', value: 78.5 },
  { name: '진학', value: 8.2 },
  { name: '창업', value: 3.8 },
  { name: '구직중', value: 9.5 },
]

const MOCK_COURSES = [
  { name: 'ITQ 엑셀', 수강생: 156, 수료율: 92 },
  { name: 'ITQ 프레젠테이션', 수강생: 134, 수료율: 89 },
  { name: 'GTQ 포토샵', 수강생: 98, 수료율: 85 },
  { name: 'AutoCAD 기계', 수강생: 87, 수료율: 91 },
  { name: '파이썬', 수강생: 112, 수료율: 88 },
  { name: '컴활 2급', 수강생: 145, 수료율: 90 },
]

const MOCK_NEWS = [
  { id: 1, title: '2024년 하반기 국비지원 훈련과정 안내', date: '2024-07-15', category: '공지' },
  { id: 2, title: 'ITQ 자격증 시험 일정 변경 안내', date: '2024-07-10', category: '시험' },
  { id: 3, title: '여름방학 특강 프로그램 개설', date: '2024-07-05', category: '과정' },
  { id: 4, title: '에듀컴퓨터교육학원 MOU 체결 기업 추가', date: '2024-06-28', category: '협력' },
  { id: 5, title: '교직원 역량강화 워크숍 개최', date: '2024-06-20', category: '내부' },
]

const MOCK_PARTNERS = [
  { id: 1, name: '한국산업인력공단', type: '정부기관' },
  { id: 2, name: '고용노동부', type: '정부기관' },
  { id: 3, name: '시흥시청', type: '지자체' },
  { id: 4, name: '한국직업능력연구원', type: '연구기관' },
  { id: 5, name: '삼성전자', type: '기업' },
  { id: 6, name: 'LG전자', type: '기업' },
  { id: 7, name: '현대자동차', type: '기업' },
  { id: 8, name: 'SK하이닉스', type: '기업' },
]

const MOCK_ACTIVITY = [
  { id: 1, action: 'ITQ 엑셀 과정 신규 개강', time: '2시간 전', type: 'course' },
  { id: 2, action: '취업처 발굴: (주)테크솔루션 협약', time: '5시간 전', type: 'partner' },
  { id: 3, action: '김경민 부원장 직무연수 수료', time: '1일 전', type: 'staff' },
  { id: 4, action: '2024 하반기 훈련계획서 제출', time: '2일 전', type: 'document' },
  { id: 5, action: '안전점검 완료 (소방시설)', time: '3일 전', type: 'infra' },
]

export async function fetchKPIStats() {
  try {
    const { data, error } = await supabase.from('kpi_stats').select('*').order('id')
    if (error) throw error
    return data?.length ? data : MOCK_KPI
  } catch {
    return MOCK_KPI
  }
}

export async function fetchEnrollmentStats() {
  try {
    const { data, error } = await supabase.from('enrollment_stats').select('*').order('month')
    if (error) throw error
    return data?.length ? data : MOCK_ENROLLMENT
  } catch {
    return MOCK_ENROLLMENT
  }
}

export async function fetchEmploymentStats() {
  try {
    const { data, error } = await supabase.from('employment_stats').select('*')
    if (error) throw error
    return data?.length ? data : MOCK_EMPLOYMENT
  } catch {
    return MOCK_EMPLOYMENT
  }
}

export async function fetchCourseStats() {
  try {
    const { data, error } = await supabase.from('courses').select('*').order('name')
    if (error) throw error
    return data?.length ? data : MOCK_COURSES
  } catch {
    return MOCK_COURSES
  }
}

export async function fetchNews() {
  try {
    const { data, error } = await supabase.from('news').select('*').order('date', { ascending: false }).limit(5)
    if (error) throw error
    return data?.length ? data : MOCK_NEWS
  } catch {
    return MOCK_NEWS
  }
}

export async function fetchPartners() {
  try {
    const { data, error } = await supabase.from('partners').select('*').order('name')
    if (error) throw error
    return data?.length ? data : MOCK_PARTNERS
  } catch {
    return MOCK_PARTNERS
  }
}

export async function fetchActivityLog() {
  try {
    const { data, error } = await supabase.from('activity_log').select('*').order('created_at', { ascending: false }).limit(5)
    if (error) throw error
    return data?.length ? data : MOCK_ACTIVITY
  } catch {
    return MOCK_ACTIVITY
  }
}
