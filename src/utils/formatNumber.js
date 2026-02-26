export function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '만'
  }
  return num.toLocaleString('ko-KR')
}

export function formatPercent(num) {
  return num.toFixed(1) + '%'
}

export function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
