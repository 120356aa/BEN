import { createContext, useState } from 'react';

export const UserContext = createContext()

export const UserContextProvider = props => {
  const [signInStatus, setSigninStatus] = useState(false)
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider
      value={{
        status: [signInStatus, setSigninStatus],
        currentUser: [user, setUser]
      }}>
      {props.children}
    </UserContext.Provider>
  )
}