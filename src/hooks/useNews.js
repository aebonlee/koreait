import { useState, useEffect } from 'react'
import { supabase, supabaseEnabled } from '../services/supabase'

export function useNews(limit = 10) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadNews() {
      if (!supabaseEnabled) {
        setLoading(false)
        return
      }
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('date', { ascending: false })
          .limit(limit)
        if (error) throw error
        setNews(data || [])
      } catch (err) {
        console.error('Failed to load news:', err)
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [limit])

  return { news, loading }
}
