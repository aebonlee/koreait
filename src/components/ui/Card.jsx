import { cn } from '../../utils/cn'

export default function Card({ children, className, title, action, ...props }) {
  return (
    <div className={cn('bg-white rounded-xl card-shadow', className)} {...props}>
      {(title || action) && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}
