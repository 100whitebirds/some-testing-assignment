import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { contactStore, authStore } from '../stores'
import { useHistory } from 'react-router'
import { RouteNames } from '../routes'
import { ContactTable } from '../components'
import { LogoutButton, Container, SubmitButton } from '../components/ui'

const Home: FC = () => {
  const history = useHistory()

  useEffect(() => {
    contactStore.getContacts(authStore.username)
  }, [])

  const clickHandler = (id: string) => {
    history.push(`${RouteNames.CONTACT}/${id}`)
  }

  return (
    <>
      <LogoutButton onClick={authStore.logout}>
        Выйти
      </LogoutButton>
      <Container>
        <SubmitButton onClick={() => clickHandler('new')}>
          Добавить контакт
        </SubmitButton>
        { contactStore.contacts.length === 0 && 
          <div>Список контактов пуст</div>
        }
        { contactStore.contacts.map(contact => 
          <div id={contact.id} onClick={() => clickHandler(contact.id)}>
            <ContactTable {...contact}/> 
          </div>
        )}
      </Container>
    </>
  )
}

export const HomePage = observer(Home)
