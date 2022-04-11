import { makeAutoObservable } from 'mobx'
import { UserService } from '../services'
import { randInt } from '../utils'

class AuthStore {
  isAuth = false as boolean
  isLoading = false as boolean
  error = '' as string
  username = '' as string

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  async login(username: string, password: string): Promise<void> {
    this.isLoading = true
    try { 
      const res = await UserService.getUsers()
      const user = res.data.find(user => user.username === username && user.password === password)

      if (user) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', user.username)
        this.username = user.username
        this.isAuth = true
        this.error = ''
      } else {
        this.error = 'Некорректный логин или пароль'
      }
    } catch {
      this.error = 'Произошла ошибка при логине'
    } finally {
      this.isLoading = false
    } 
  }

  async register(username: string, password: string): Promise<void> {
    this.isLoading = true
    try { 
      const res = await UserService.getUsers()
      const user = res.data.find(user => user.username === username)
      
      if (user) {
        this.error = 'Пользователь с таким именем уже существует'
      } else {
        const id = randInt()
        const res = await UserService.createUser({ id, username, password })
        const user = res.data
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', user.username)
        this.username = user.username
        this.isAuth = true
      }
    } catch {
      this.error = 'Произошла ошибка при регистрации'
    } finally {
      this.isLoading = false
    } 
  }

  logout(): void {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    this.username = '' 
    this.isAuth = false
  }
}

export const authStore = new AuthStore()