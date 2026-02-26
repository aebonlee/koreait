import { Clock } from 'lucide-react'

export default function PlaceholderContent({ title }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
        <Clock className="w-8 h-8 text-purple-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">콘텐츠 준비 중입니다</p>
      <span className="mt-3 px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium">
        추가예정
      </span>
    </div>
  )
}
