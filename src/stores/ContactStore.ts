import { makeAutoObservable } from 'mobx'
import { authStore } from '.'
import { ContactService } from '../services'
import { IContact } from '../models'
import { Impressions } from '../constants'
import { validateForm } from '../utils'

class ContactStore {
  contacts = [] as IContact[]
  error = '' as string
  isLoading = false as boolean
  authStore = authStore

  initialformData = {
    id: '',
    name: '',
    phoneNumber: '',
    firstImpression: Impressions.NEUTRAL,
    acqDate: new Date(),
    photo: '',
    owner: '',
  } as IContact
  
  initialFormError = {
    name: '',
    phoneNumber: '',
    acqDate: ''
  }

  formData = this.initialformData

  formError = this.initialFormError

  photoFile = null as File | null
  
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  resetForm() {
    this.formData = this.initialformData
    this.formError = this.initialFormError
    this.photoFile = null
  }
  
  //Предполагается дальнейшая отправка фотки на сервер, 
  // c js-server`ом отображать не получится
  setFormPhoto(photo: File) {
    this.photoFile = photo
  }

  async getContacts(username: string): Promise<void> {
    this.isLoading = true
    try {
      const response = await ContactService.getContacts()
      const contacts = response.data.filter(c => c.owner === username)
      this.contacts = contacts
    } catch (e) {
      this.error = 'Произошла ошибка при загрузке контактов'
    } finally {
      this.isLoading = false
    }
  }

  async getContactForEdit(id: string): Promise<void> {
    this.isLoading = true
    try {
      const response = await ContactService.getContact(id)
      this.formData = response.data
      this.formData.acqDate = new Date(response.data.acqDate as Date)
    } catch (e) {
      this.error = 'Произошла ошибка при загрузке контакта'
    } finally {
      this.isLoading = false
    }
  }

  async createContact(): Promise<void | string> {
    this.isLoading = true
    const err = validateForm(this.formData)

    if (err.name || err.phoneNumber || err.acqDate) {
      this.formError = err
    } else {
      try {
        this.formData.owner = authStore.username
        await ContactService.addContact(this.formData)
        return 'success'
      } catch (e) {
        this.error = 'Произошла ошибка при создании контакта'
      } finally {
        this.isLoading = false
      }
    }
  }

  async editContact(): Promise<void | string> {
    this.isLoading = true
    const err = validateForm(this.formData)

    if (err.name || err.phoneNumber || err.acqDate) {
      this.formError = err
    } else {
      try {
        await ContactService.editContact(this.formData)
        return 'success'
      } catch (e) {
        this.error = 'Произошла ошибка при редактировании контакта'
      } finally {
        this.isLoading = false
      }
    }
  }

  async deleteContact(): Promise<void | string> {
    this.isLoading = true
    try {
      await ContactService.deleteContact(this.formData.id)
      return 'success'
    } catch (e) {
      this.error = 'Произошла ошибка при удалении контакта'
    } finally {
      this.isLoading = false
    }
  }
}

export const contactStore = new ContactStore()