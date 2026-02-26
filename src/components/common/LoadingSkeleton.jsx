import { cn } from '../../utils/cn'

export default function LoadingSkeleton({ className, lines = 3 }) {
  return (
    <div className={cn('animate-pulse space-y-3', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded"
          style={{ width: `${Math.max(40, 100 - i * 15)}%` }}
        />
      ))}
    </div>
  )
}
