import keycloak from '@/app/configs/keycloak'

export const login = () => keycloak.login()

export const logout = () => keycloak.logout()

export const register = () => keycloak.register()

export const isLoggedIn = () => !!keycloak.token

export const hasRole = (role: string) => keycloak.hasRealmRole(role)

export const getToken = () => keycloak.token

export const updateToken = (minValidity: number) => keycloak.updateToken(minValidity)

export const getUsername = () => keycloak.tokenParsed?.preferred_username

export const getEmail = () => keycloak.tokenParsed?.email

export const getName = () => keycloak.tokenParsed?.name