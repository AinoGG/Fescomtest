import { defineStore } from 'pinia'
import { authRequest } from '@/API/index'

interface Auth {
    auth: boolean,
    userForm: string,
    passForm: string,
    isAuth: any
}


export const useAuthStore = defineStore('auth', {
    state: (): Auth => {
        return {
            auth: true,
            userForm: '',
            passForm: '',
            isAuth: ''
        }
    },   
    actions: {
        async login(username: string, password: string) {
            await authRequest(`mutation getAuth {
                signin(password: "${password}", username: "${username}"){
              token,
              user {
                        email,
                  username
              }
            }
        }`).then((data: Response) => data.json().then(
            res => {
                this.isAuth = res.data.signin.token
                localStorage.setItem('token', this.isAuth)
                this.auth = true
            }
        ))
        },
    }
})
