import { FC, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { authStore as Store } from '../stores'
import { RouteNames } from '../routes'
import { useHistory } from 'react-router'
import { SubmitButton, ClickableDiv, Container, Input, ErrorLabel } from '../components/ui'

const Login: FC = () => {
  const [username, setUsername] = useState<string>('user1')
  const [password, setPassword] = useState<string>('12345')
  const history = useHistory()

  const submit = async() => {
    await Store.login(username, password)
    if (Store.isAuth) history.push(RouteNames.HOME)
  }

  return (
    <Container>
      <ErrorLabel>
        { Store.error }
      </ErrorLabel>
      <Input
        placeholder='Введите логин'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        placeholder='Введите пароль'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <SubmitButton onClick={submit}> 
        Войти
      </SubmitButton>
      <ClickableDiv onClick={() => history.push(RouteNames.REGISTRATION)}>
        Создать учетную запись
      </ClickableDiv>
    </Container>
  )
}

export const LoginPage = observer(Login)
