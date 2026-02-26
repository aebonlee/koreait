import { supabase, supabaseEnabled } from './supabase'

function requireSupabase() {
  if (!supabaseEnabled) throw new Error('Supabase가 설정되지 않았습니다. .env 파일을 확인하세요.')
}

export async function uploadFile(bucket, path, file) {
  requireSupabase()
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true })
  if (error) throw error
  return data
}

export function getPublicUrl(bucket, path) {
  requireSupabase()
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

export async function deleteFile(bucket, path) {
  requireSupabase()
  const { error } = await supabase.storage.from(bucket).remove([path])
  if (error) throw error
}
