import { Admin } from "../hooks/useAdmin"

const ADMIN_KEY = 'admin'

type GetAdminAction = () => Admin

export const storeAdminAction = (admin: Admin) => {
  try {
    console.log(admin)
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
  } catch (error) {
    console.log(error)
  }
}

export const getAdminAction: GetAdminAction = () => {
  try {
    const rawAdmin = localStorage.getItem(ADMIN_KEY) ?? '{"username": ""}'
    return JSON.parse(rawAdmin)
  } catch (error) {
    console.log(error)
    return { username: "" }
  }
}
