import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true'
  }
})

export function setAuthToken(token: String) {
  http.defaults.headers['Authorization'] = `Bearer ${token}`
}
