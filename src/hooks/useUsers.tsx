import { useState, useEffect } from "react"
import { getUsersAction, storeUsersAction } from "../actions/store.users.action"
import { Task } from "../pages/Tasks/Tasks"

export interface UserTask {
  id: string
  task: string
  description: string
}

export interface User {
  id: string
  name: string
  lastname: string
  email: string,
  tasks: UserTask[]
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [usersTasks, setUsersTasks] = useState<Task[]>([])

  const getUsersTasks = (users: User[]) => {
    const tasks: Task[] = []
    
    for (const user of users) { 
      const userTasks = user.tasks.map(task => ({
        id: task.id,
        email: user.email,
        task: task.task,
        description: task.description,
        userId: user.id
      }))
      
      tasks.push(...userTasks)
    }

    return tasks
  }

  useEffect(() => {
    const users = getUsersAction()
    setUsers(users)
    setUsersTasks(getUsersTasks(users))
  }, [])

  const addUser = (user: User) => {
    const newUsers = [...users, user]
    storeUsersAction(newUsers)
    setUsers(newUsers)
  }

  const addTaskToUser = (userId: string, task: UserTask) => {
    const newUsers = users.map(user => user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user)
    storeUsersAction(newUsers)
    setUsers(newUsers)
    setUsersTasks(getUsersTasks(newUsers))
  }

  const searchUsers = (search: string) => {
    if (search !== '') {
      const newUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.lastname.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
      setUsers(newUsers)
    } else {
      const users = getUsersAction()
      setUsers(users)
    }
  }

  return {
    users,
    usersTasks,
    addUser,
    addTaskToUser,
    searchUsers
  }
}
