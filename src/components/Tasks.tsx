import { ListPlus } from "lucide-react"
import { TaskCard } from "./TaskCard"
import { useUserContext } from "../context/UserContext"
import { useEffect, useState } from "react"
import { useUsers, UserTask } from "../hooks/useUsers"
import { CreateTask } from "./CreateTask"
import { v4 as uuid } from 'uuid'

export interface Task {
  id: string
  email: string
  task: string
  description: string
}

export const Tasks = () => {
  const { reloadComponent, updateReloadComponent } = useUserContext()

  const { users, addTaskToUser, usersTasks } = useUsers()

  const [task, setTask] = useState<UserTask | null>(null)
  const [isAddingTask, setIsAddingTask] = useState(false)

  useEffect(() => {
    if (reloadComponent) {
      setTask(null)
      setIsAddingTask(false)
      updateReloadComponent(false)
    }
  }, [reloadComponent])
  
  const handleAddTask = (userId: string, task: UserTask) => {
    addTaskToUser(userId, task)
    setIsAddingTask(false)
  }

  return (
    <div>
      {
        isAddingTask ? <h2 className='text-xl mb-4 text-zinc-800'>Crear Tarea</h2> : <h2 className='text-xl mb-4 text-zinc-800'>Tareas</h2>
      }

      {
        usersTasks.length === 0 && !isAddingTask && (
          <div className="text-center text-zinc-600 h-100">
            <p className="mt-50 ">Sin Tareas</p>
          </div>
        )
      }

      {
        !task && !isAddingTask && (
          usersTasks.map(({ email, task, description }) => (
            <TaskCard key={uuid()} task={task} description={description} email={email ?? 'Sin email'} />
          ))
        )
      }

      {
        isAddingTask && <CreateTask addTask={handleAddTask} users={users} />
      }

      {
        (!isAddingTask && !task) && (
          <button onClick={() => setIsAddingTask(!isAddingTask)} className="bg-blue-500 text-white p-3 rounded-md hover:bg-sky-700 cursor-pointer shadow-md fixed bottom-25 right-5">
            <ListPlus />
          </button>
        )
      }
    </div>
  )
}
