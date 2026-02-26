import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
  outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  ghost: 'hover:bg-gray-100 text-gray-700',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({ children, variant = 'primary', size = 'md', className, disabled, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
