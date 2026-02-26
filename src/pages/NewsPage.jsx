import { useState, useEffect } from 'react'
import { Newspaper, Calendar, Tag } from 'lucide-react'
import { fetchNews } from '../services/dashboardService'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Spinner from '../components/ui/Spinner'

export default function NewsPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('전체')

  useEffect(() => {
    fetchNews().then((data) => {
      setNews(data)
      setLoading(false)
    })
  }, [])

  const categories = ['전체', '공지', '시험', '과정', '협력', '내부']
  const filtered = filter === '전체' ? news : news.filter((n) => n.category === filter)

  if (loading) {
    return <div className="flex justify-center py-20"><Spinner size="lg" /></div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">공지사항 / 뉴스</h1>
        <p className="text-sm text-gray-500 mt-1">에듀컴퓨터교육학원의 최신 소식</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-xl card-shadow p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Newspaper className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <Badge>{item.category}</Badge>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Newspaper className="w-12 h-12 mx-auto mb-3" />
          <p>해당 카테고리의 소식이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
