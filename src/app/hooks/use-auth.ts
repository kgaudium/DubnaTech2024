'use client'

import { useState, useEffect } from 'react'
import keycloak from "@/app/configs/keycloak";
import { login, logout, register, isLoggedIn, hasRole, getUsername, getEmail, getName } from '@/app/utils/keycloak-utils'

export function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const updateState = () => {
            const authenticated = isLoggedIn()
            setAuthenticated(authenticated)
            if (authenticated) {
                setUser({
                    username: getUsername(),
                    email: getEmail(),
                    name: getName(),
                })
            } else {
                setUser(null)
            }
        }

        updateState()
        keycloak.onAuthSuccess = updateState
        keycloak.onAuthLogout = updateState
    }, [])

    return {
        authenticated,
        user,
        login,
        logout,
        register,
        hasRole,
    }
}