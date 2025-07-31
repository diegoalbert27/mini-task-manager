import { UserPlus } from "lucide-react"
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from "react"

import { User, useUsers } from "../../hooks/useUsers"

import { UserCard } from "./UserCard"
import { CreateUser } from "./CreateUser"
import { UserDetail } from "./UserDetail"
import { useUserContext } from "../../context/UserContext"
import { Search } from "../../components/Search"
import { success, Alert } from "../../components/Alert"

export const Users = () => {
  const { reloadComponent, updateReloadComponent } = useUserContext()

  const { users, addUser, searchUsers } = useUsers()
  
  const [user, setUser] = useState<User | null>(null)
  const [isAddingUser, setIsAddingUser] = useState(false)
  const [search, setSearch] = useState("")
  
  const changeUserDetail = (user: User) => {
    setUser(user)
  }

  const handleAddUser = (user: User) => {
    addUser(user)
    setUser(user)
    setIsAddingUser(false)
    success('Usuario creado')
  }

  useEffect(() => { 
    if (reloadComponent) {
      setUser(null)
      setIsAddingUser(false)
      updateReloadComponent(false)
    }
  }, [reloadComponent])

  const handleSearchUsers = (search: string) => {
    setSearch(search)
    searchUsers(search)
  }

  return (
    <>    
      <Alert />
      
      {
        isAddingUser ? <h2 className='text-xl mb-4 text-zinc-800'>Crear Usuario</h2> : <h2 className='text-xl mb-4 text-zinc-800'>Usuarios</h2>
      }

      {
        !user && !isAddingUser && (
          <>
            <Search searchItems={handleSearchUsers} search={search} />
            {
              users.map(({ email, lastname, name, tasks, id }) => (
                <UserCard key={uuid()} name={name} lastname={lastname} email={email} tasks={tasks} id={id} changeUserDetail={changeUserDetail} />
              ))
            }
          </>
        )
      }

      {
        users.length === 0 && !isAddingUser && (
          <div className="flex items-center justify-center h-[60vh] text-center text-zinc-600">
            <p>Sin Usuarios</p>
          </div>
        )}

      {
        user && <UserDetail name={user.name} lastname={user.lastname} email={user.email} userTasks={user.tasks} userId={user.id} />
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
