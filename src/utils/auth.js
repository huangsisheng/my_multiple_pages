// 处理token
import Cookies from 'js-cookie'
// import { showToast } from './popup'
// const TokenKey = 'access-token'
const TokenKey = 'token'

export function getToken() {
  let token =  Cookies.get(TokenKey)
  return token
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
