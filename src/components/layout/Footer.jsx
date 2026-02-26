export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4 px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} 코리아IT아카데미. All rights reserved.</p>
        <p>KoreaIT Dashboard v1.0</p>
      </div>
    </footer>
  )
}
