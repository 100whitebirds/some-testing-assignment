import { FC } from 'react'
import { H4, Table, TBody, TH, THead, TR } from './ui'
import { Image } from './ui'
import { IContact } from '../models'
import { formatToStringDate } from '../utils'

export const ContactTable: FC<IContact> = (contact) => (
  <Table>
    <THead>
      { contact.name }
    </THead>
    <TBody>
      <TR>
        <TH>
          <H4>Фото: </H4>
          <Image src={ contact.photo } />
        </TH>
        <TH>
          <H4>Номер телефона: </H4>
          { contact.phoneNumber }
        </TH>
        <TH>
          <H4>Первое впечатление: </H4>
          { contact.firstImpression }
        </TH>
        <TH>
          <H4>Дата знакомства: </H4>
          { contact.acqDate && formatToStringDate(contact.acqDate) }
        </TH>
      </TR>
    </TBody>
  </Table>
)
