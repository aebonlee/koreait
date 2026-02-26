export const ADMIN_EMAILS = [
  'aebonlee@gmail.com',
  'admin@educomputer.co.kr',
]

export function isAdminEmail(email) {
  return ADMIN_EMAILS.includes(email?.toLowerCase())
}
