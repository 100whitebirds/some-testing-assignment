export interface IContact {
  id: string
  name: string
  phoneNumber: string
  firstImpression: 'Нейтральное' | 'Положительное' | 'Негативное' | 'Мутный чел'
  acqDate: Date | null
  photo?: string
  owner: string
}