import { observer } from 'mobx-react-lite'
import { authStore as Store } from '../stores'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from "../routes"

const Router = () => {
  return (
    Store.isAuth ?
      <Switch>
        {privateRoutes.map(route =>
          <Route path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={RouteNames.HOME} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
          )}
          <Redirect to={RouteNames.LOGIN} />
      </Switch>
  )
}

export const AppRouter = observer(Router)

