import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {

const [token, setToken] = useState(true)

const Logout = () => {
    setToken(false)
}

    return (
        <UserContext.Provider value={{token, setToken, Logout}}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider;