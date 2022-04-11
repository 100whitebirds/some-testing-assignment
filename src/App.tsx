import { useEffect } from "react"
import { authStore as Store } from './stores'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components"
import { observer } from "mobx-react-lite"

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      Store.username = localStorage.getItem('username') as string
      Store.isAuth = true
    }
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default observer(App)
