import { supabase } from './supabase'

export async function uploadFile(bucket, path, file) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true })
  if (error) throw error
  return data
}

export function getPublicUrl(bucket, path) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

export async function deleteFile(bucket, path) {
  const { error } = await supabase.storage.from(bucket).remove([path])
  if (error) throw error
}
