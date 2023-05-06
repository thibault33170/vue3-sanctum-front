import { http } from '@/common/api/http'

export async function getProducts() {
  return await http.get('/api/products')
}
