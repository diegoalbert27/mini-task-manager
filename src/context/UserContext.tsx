import {
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState
} from 'react'

interface UserState {
  username: string
  isAuthenticated: boolean
  loginWithUsername: (username: string) => void
}

export const UserContext = createContext({} as UserState)

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState('')

  const loginWithUsername = (username: string) => {
    setUsername(username)
  }

  return (
    <UserContext.Provider value={{
      username,
      isAuthenticated: username !== '',
      loginWithUsername
    }}>
      {children}
    </UserContext.Provider>
  )
}
