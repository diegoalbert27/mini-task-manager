import { UserPlus } from "lucide-react"
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from "react"

import { User, useUsers } from "../hooks/useUsers"

import { UserCard } from "./UserCard"
import { CreateUser } from "./CreateUser"
import { UserDetail } from "./UserDetail"
import { useUserContext } from "../context/UserContext"

export const Users = () => {
  const { reloadComponent, updateReloadComponent } = useUserContext()

  const { users, addUser } = useUsers()
  
  const [user, setUser] = useState<User | null>(null)
  const [isAddingUser, setIsAddingUser] = useState(false)

  const changeUserDetail = (user: User) => {
    setUser(user)
  }

  const handleAddUser = (user: User) => {
    addUser(user)
    setUser(user)
    setIsAddingUser(false)
  }

  useEffect(() => { 
    if (reloadComponent) {
      setUser(null)
      setIsAddingUser(false)
      updateReloadComponent(false)
    }
  }, [reloadComponent])

  return (
    <>
      {
        users.length === 0 && !isAddingUser && (
          <div className="text-center text-zinc-600 h-100">
            <p className="mt-50 ">Sin Usuarios</p>
          </div>
        )
      }

      {
        !user && !isAddingUser && (
          users.map(({ email, lastname, name }) => (
            <UserCard key={uuid()} name={name} lastname={lastname} email={email} changeUserDetail={changeUserDetail} />
          ))
        )
      }

      {
        user && <UserDetail name={user.name} lastname={user.lastname} email={user.email}  />
      }

      {
        isAddingUser && <CreateUser addUser={handleAddUser} />
      }

      {
        (!isAddingUser && !user) && <button onClick={() => setIsAddingUser(!isAddingUser)} className="bg-blue-500 text-white p-3 rounded-md hover:bg-sky-700 cursor-pointer shadow-md fixed bottom-25 right-5">
          <UserPlus />
        </button>
      }
    </>
  )
}
