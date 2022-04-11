import React from 'react'
import { ContactPage, HomePage, LoginPage, RegistrationPage } from '../pages'

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export enum RouteNames {
  REGISTRATION = '/registration',
  LOGIN = '/login',
  HOME = '/',
  CONTACT = '/contact',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.REGISTRATION, exact: true, component: RegistrationPage },
  { path: RouteNames.LOGIN, exact: true, component: LoginPage },
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, exact: true, component: HomePage },
  { path: `${RouteNames.CONTACT}/:id`, component: ContactPage }
]