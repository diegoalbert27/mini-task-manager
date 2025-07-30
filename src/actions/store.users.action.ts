import { User } from "../hooks/useUsers"

const USERS_KEY = 'users'

type GetUsersAction = () => User[]

export const storeUsersAction = (users: User[]) => {
  try {
    console.log(users)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
  } catch (error) {
    console.log(error)
  }
}

export const getUsersAction: GetUsersAction = () => {
  try {
    const rawUsers = localStorage.getItem(USERS_KEY) ?? '[]'
    return JSON.parse(rawUsers)
  } catch (error) {
    console.log(error)
    return []
  }
}
