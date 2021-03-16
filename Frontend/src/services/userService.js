import http from './httpservice';
import { apiUrl } from '../config.json';

const api = apiUrl +"/register";
export function register(user){
    return http.post(api, {
            name: user.name,
            email: user.email,
            password:user.name
        });

        }