import { IContact } from "../models"

export const validateForm = ({ name, phoneNumber, acqDate }: IContact) => {
  let nameMessage = ''
  let phoneNumberMessage = ''
  let acqDateMessage = ''

  !name.length && (nameMessage = 'Поле является обязательным')
  name.length > 100 && (nameMessage = 'Максимальная допустимая длина - 100 символов')

  const phoneRegex = /^(\+7|8)?\d{10}$/
  !phoneNumber.match(phoneRegex) && (phoneNumberMessage = 'Некорректный номер телефона')
  
  const date = new Date()
  acqDate && date < acqDate && (acqDateMessage = 'Дата должна быть меньше текущей')
  
  return ({
    name: nameMessage,
    phoneNumber: phoneNumberMessage,
    acqDate: acqDateMessage
  })
}