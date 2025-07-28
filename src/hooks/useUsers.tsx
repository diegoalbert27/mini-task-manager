import { useState, useEffect } from "react"
import { getUsersAction, storeUsersAction } from "../actions/store.users.action"

export interface User {
  name: string
  lastname: string
  email: string
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const users = getUsersAction()
    setUsers(users)
  }, [])

  const addUser = (user: User) => {
    const newUsers = [...users, user]
    storeUsersAction(newUsers)
    setUsers(newUsers)
  }

  return {
    users,
    addUser
  }
}
