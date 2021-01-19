import React, { useState, createContext } from 'react'

export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
  const [isSignedIn, setSignedIn] = useState(false)

  return (
    <UserContext.Provider value={{ isSignedIn, setSignedIn }}>
      {children}
    </UserContext.Provider>
  )
}
