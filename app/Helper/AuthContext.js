"use client"
import React, { createContext, useState } from 'react'

export const Authentication = createContext()

const AuthContext = ({ children }) => {
    const [authenticationStatus, setauthenticationStatus] = useState(false)
    return (
        <Authentication.Provider value={{ authenticationStatus, setauthenticationStatus }}>
            {children}
        </Authentication.Provider>
    )
}

export default AuthContext