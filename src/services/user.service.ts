import axios, { AxiosResponse } from 'axios'
import { IUser } from '../models'

export class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>('http://localhost:5555/users')
  }
  static async createUser(newUser: IUser): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>('http://localhost:5555/users', newUser)
  }
}