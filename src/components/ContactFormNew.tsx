import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { contactStore as Store } from '../stores'
import { useHistory } from 'react-router'
import { Impressions } from '../constants'
import { 
  FormGroup, 
  Label, 
  Form, 
  Input, 
  SubmitButton,
  Image,
  DropDownContainer,
  SelectedItem,
  DropDownList,
  Item,
  ErrorLabel
} from './ui'
import { IContact } from '../models'
import { FileInput } from './ui/FileInput'
import { ThemeProvider } from 'styled-components'
import { DateSingleInput } from '@datepicker-react/styled'
import { RouteNames } from '../routes'

const FormNew: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const [datepickerOpen, setDatepickerOpen] = useState<boolean>(false)
  const history = useHistory()

  const uploadHandler = (e: any) => {
    Store.setFormPhoto(e.target.files[0])
  }

  const handleSelect = (item: IContact['firstImpression']) => {
    Store.formData.firstImpression = item
    setDropdownOpen(false)
  }

  const submitHandler = async() => {
    const success = await Store.createContact()
    if (success) {
      Store.resetForm()
      history.push(RouteNames.HOME)
    }
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label htmlFor='label'>Фотография</Label>
          { Store.photoFile && 
            <Image alt='no image' src={URL.createObjectURL(Store.photoFile)}/>
          }
          <FileInput upload={uploadHandler}/>
        </FormGroup>

        <FormGroup>
          { Store.formError.name
            ? <ErrorLabel>{ Store.formError.name }</ErrorLabel>
            : <Label>Имя</Label>
          }
          <Input
            onChange={e => Store.formData.name = e.target.value}
            placeholder='Введите имя'
            value={Store.formData.name}
          />
        </FormGroup>

        <FormGroup>
          { Store.formError.phoneNumber
            ? <ErrorLabel>{ Store.formError.phoneNumber }</ErrorLabel>
            : <Label>Номер телефона</Label>
          }
          <Input
            onChange={e => Store.formData.phoneNumber = e.target.value}
            placeholder='Введите номер'
            value={Store.formData.phoneNumber}
          />
        </FormGroup>

        <FormGroup>
          <Label>Первое впечатление</Label>
          <DropDownContainer>
            <SelectedItem onClick={() => setDropdownOpen(!dropdownOpen)}>
              { Store.formData.firstImpression}
            </SelectedItem>
            { dropdownOpen &&
              <DropDownList>
                { Object.values(Impressions).map(item =>
                  <Item onClick={() => handleSelect(item as IContact['firstImpression'])}>
                    { item }
                  </Item>
                )}
              </DropDownList>
            }
          </DropDownContainer>
        </FormGroup>

        <FormGroup>
          { Store.formError.acqDate
            ? <ErrorLabel>{ Store.formError.acqDate }</ErrorLabel>
            : <Label>Дата знакомства</Label>
          }
          <ThemeProvider
            theme={{
              reactDatepicker: {
                datepickerBackground: 'rgba(255, 255, 255, 0.15)',
                datepickerBorderRadius: '0 1.5rem 1.5rem 0'
              },
            }}
          >
            <DateSingleInput
              onDateChange={data => Store.formData.acqDate = data.date}
              onFocusChange={() => setDatepickerOpen(!datepickerOpen)}
              date={Store.formData.acqDate}
              showDatepicker={datepickerOpen}
              onClose={() => setDatepickerOpen(false)}
            />
          </ThemeProvider>
        </FormGroup>
      </Form>
      <SubmitButton onClick={submitHandler}>
        Сохранить
      </SubmitButton>
    </>
  )
}

export const ContactFormNew = observer(FormNew)
