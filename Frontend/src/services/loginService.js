import http from './httpservice';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + "/login";
const tokenKey = 'token';


http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt} = await http.post(apiEndpoint, { email, password });
  console.log(jwt)
  localStorage.setItem(tokenKey, jwt);
}


export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
  }
  
  export function logout() {
    localStorage.removeItem(tokenKey);
  }
  
  export function getCurrentUser() {
    try {
      const jwt = localStorage.getItem(tokenKey);
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  }
  
  export function getJwt() {
    return localStorage.getItem(tokenKey);
  }
  
  export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
  };
  