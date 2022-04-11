import { FC, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { authStore as Store } from '../stores'
import { RouteNames } from '../routes'
import { useHistory } from 'react-router'
import { SubmitButton, ClickableDiv, Container, Input } from '../components/ui'

const Registration: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const history = useHistory()

  const submit = async() => {
    await Store.register(username, password)
    if (Store.isAuth) history.push(RouteNames.HOME)
  }

  return (
    <Container>
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
        Зарегистрироваться
      </SubmitButton>
      <ClickableDiv onClick={() => history.push(RouteNames.LOGIN)}>
        Войти в существующий аккаунт
      </ClickableDiv>
    </Container>
  )
}

export const RegistrationPage = observer(Registration)
