import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useHistory, useParams } from 'react-router'
import { authStore, contactStore } from '../stores'
import { CloseButton, Container, LogoutButton } from '../components/ui'
import { ContactFormEdit, ContactFormNew } from '../components'
import { RouteNames } from '../routes'

const Contact: FC = () => {
  const history = useHistory()
  const { id } = useParams<{id: string}>() 
  const isNew = id === 'new'

  const cancelHandler = () => {
    contactStore.resetForm()
    history.push(RouteNames.HOME)
  }
  return (
    <>
      <LogoutButton onClick={authStore.logout}>
        Выйти
      </LogoutButton>
      <Container>
        <CloseButton onClick={cancelHandler}>
          Закрыть
        </CloseButton>
        { 
          isNew 
            ? <ContactFormNew />
            : <ContactFormEdit id={id}/>
        }
      </Container>
    </>
  )
}

export const ContactPage = observer(Contact)
