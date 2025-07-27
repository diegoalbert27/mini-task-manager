import { UserPlus } from "lucide-react"
import { v4 as uuid } from 'uuid'
import { useState } from "react"

import { User, useUsers } from "../hooks/useUsers"

import { UserCard } from "./UserCard"
import { CreateUser } from "./CreateUser"
import { UserDetail } from "./UserDetail"

export const Users = () => {
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

  return (
    <>
      {
        users.length === 0 && !isAddingUser && (
          <div className="text-center text-zinc-600 h-100 relative">
            <p className="absolute left-50 top-50">Sin Usuarios</p>
          </div>
        )
      }

      {
        !user && !isAddingUser && (
          users.map(({ email, lastname, name, image }) => (
            <UserCard key={uuid()} name={name} lastname={lastname} email={email} image={image} changeUserDetail={changeUserDetail} />
          ))
        )
      }

      {
        user && <UserDetail name={user.name} lastname={user.lastname} email={user.email} image={user.image}  />
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
