import { useState, useEffect } from 'react'
import {
  fetchKPIStats,
  fetchEnrollmentStats,
  fetchEmploymentStats,
  fetchCourseStats,
  fetchNews,
  fetchPartners,
  fetchActivityLog,
} from '../services/dashboardService'

export function useDashboardData() {
  const [data, setData] = useState({
    kpi: [],
    enrollment: [],
    employment: [],
    courses: [],
    news: [],
    partners: [],
    activity: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [kpi, enrollment, employment, courses, news, partners, activity] = await Promise.all([
          fetchKPIStats(),
          fetchEnrollmentStats(),
          fetchEmploymentStats(),
          fetchCourseStats(),
          fetchNews(),
          fetchPartners(),
          fetchActivityLog(),
        ])
        setData({ kpi, enrollment, employment, courses, news, partners, activity })
      } catch (err) {
        console.error('Failed to load dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return { ...data, loading }
}
