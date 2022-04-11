import axios, { AxiosResponse } from 'axios'
import { IContact } from '../models'

export class ContactService {
  static async getContacts(): Promise<AxiosResponse<IContact[]>> {
    return axios.get<IContact[]>('http://localhost:5555/contacts')
  }

  static async getContact(contactId: string): Promise<AxiosResponse<IContact>> {
    return axios.get<IContact>(`http://localhost:5555/contacts/${contactId}`)
  }

  static async addContact(contact: IContact): Promise<AxiosResponse<IContact[]>> {
    return axios.post<IContact[]>('http://localhost:5555/contacts', contact)
  }

  static async editContact(contact: IContact): Promise<AxiosResponse<IContact[]>> {
    return axios.put<IContact[]>(`http://localhost:5555/contacts/${contact.id}`, contact)
  }

  static async deleteContact(contactId: string): Promise<AxiosResponse<IContact[]>> {
    return axios.delete<IContact[]>(`http://localhost:5555/contacts/${contactId}`)
  }
}