import {
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState
} from 'react'

interface UserState {
  username: string
  isAuthenticated: boolean
  currentPage: string
  loginWithUsername: (username: string) => void
  changeCurrentPage: (pageName: string) => void
}

export const UserContext = createContext({} as UserState)

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('Inicio')
  
  const changeCurrentPage = (pageName: string) => {
    setCurrentPage(pageName)
  }

  const loginWithUsername = (username: string) => {
    setUsername(username)
  }

  return (
    <UserContext.Provider value={{
      username,
      isAuthenticated: true, // username !== '',
      currentPage,
      loginWithUsername,
      changeCurrentPage
    }}>
      {children}
    </UserContext.Provider>
  )
}
