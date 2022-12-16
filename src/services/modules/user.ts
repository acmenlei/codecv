import { post } from "../config";

export function login(data: IUser) {
  return post('/user/login', data);
}

export function registerUser(data: IUser) {
  return post('/user/register', data);
}

export function updateUserInfo(data: IUserInfo) {
  return post('/user/update', data)
}

export function logout(data: { username: string }) {
  return post('/user/logout', data);
}

export function verify(data: { token: string, username: string }) {
  return post('/user/verify', data);
}

export function queryUserInfoById(data: { uid: number }) {
  return post('/user/queryUserById', data);
}

export function pwdUpdate(data: { nPassword: string, oPassword: string, username: string }) {
  return post('/user/pwdUpdate', data)
} 