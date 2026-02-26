export const ADMIN_EMAILS = [
  'aebonlee@gmail.com',
  'ciu@koreaedugroup.com',
]

export function isAdminEmail(email) {
  return ADMIN_EMAILS.includes(email?.toLowerCase())
}
