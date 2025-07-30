import { useState, useEffect } from "react"
import { getAdminAction, storeAdminAction } from "../actions/store.admin.action"

export interface Admin {
    username: string
  }

export const useAdmin = () => {
  const [admin, setAdmin] = useState<Admin>({ username: '' })

  useEffect(() => {
    const admin = getAdminAction()
    setAdmin(admin)
  }, [])

  const addAdmin = (admin: Admin) => {
    storeAdminAction(admin)
    setAdmin(admin)
  }

  return {
    admin,
    addAdmin
  }
}
