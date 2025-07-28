import {
  createContext, 
  useContext, 
  PropsWithChildren, 
  useState,
} from 'react'

import { useAdmin } from '../hooks/useAdmin'

interface UserState {
  username: string
  isAuthenticated: boolean
  currentPage: string
  reloadComponent: boolean
  loginWithUsername: (username: string) => void
  changeCurrentPage: (pageName: string) => void
  updateReloadComponent: (reload: boolean) => void
}

const defaultUserState: UserState = {
  username: '',
  isAuthenticated: false,
  currentPage: 'Ajustes',
  reloadComponent: false,
  loginWithUsername: () => {},
  changeCurrentPage: () => {},
  updateReloadComponent: () => {}
}

export const UserContext = createContext<UserState>(defaultUserState)

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { admin, addAdmin } = useAdmin()
  const [currentPage, setCurrentPage] = useState('Ajustes')
  const [reloadComponent, setReloadComponent] = useState(false)

  const updateReloadComponent = (reload: boolean) => {
    setReloadComponent(reload)
  }
  
  const changeCurrentPage = (pageName: string) => {
    setCurrentPage(pageName)
  }

  const loginWithUsername = (username: string) => {
    addAdmin({ username })
  }

  return (
    <UserContext.Provider value={{
      username: admin.username,
      isAuthenticated: admin.username !== '',
      currentPage,
      loginWithUsername,
      changeCurrentPage,
      reloadComponent,
      updateReloadComponent
    }}>
      {children}
    </UserContext.Provider>
  )
}
