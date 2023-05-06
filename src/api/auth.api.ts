import { http } from '@/common/api/http'

export async function register(payload: {}) {
  await http.get('/sanctum/csrf-cookie')

  return await http.post('/api/register', payload)
}

export async function login(payload: {}) {
  await http.get('/sanctum/csrf-cookie')

  return await http.post('/api/login', payload)
}

export async function getUser() {
  return await http.get('/api/user')
}
