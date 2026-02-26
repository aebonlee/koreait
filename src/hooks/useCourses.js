import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'

export function useCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCourses() {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .order('name')
        if (error) throw error
        setCourses(data || [])
      } catch (err) {
        console.error('Failed to load courses:', err)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [])

  return { courses, loading }
}
