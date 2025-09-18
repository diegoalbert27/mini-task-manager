import { ListPlus } from "lucide-react"
import { TaskCard } from "./TaskCard"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import { useUsers, UserTask } from "../../hooks/useUsers"
import { CreateTask } from "./CreateTask"
import { TaskDetail } from "./TaskDetail"
import { success, Alert } from "../../components/Alert"
import { StatusOption } from "../../enums/statusOption.enum"

export interface Task {
  id: string
  email: string
  userId: string
  task: string
  description: string
  status: string
}

export interface User {
  id: string
  name: string
  lastname: string
  email: string
}

export const Tasks = () => {
  const { reloadComponent, updateReloadComponent } = useUserContext()

  const { users, addTaskToUser, usersTasks, searchUsers, updateTaskStatus } = useUsers()

  const handleSearchUsers = (search: string) => {
    searchUsers(search)
  }

  const [task, setTask] = useState<UserTask | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isAddingTask, setIsAddingTask] = useState(false)

  useEffect(() => {
    if (reloadComponent) {
      setTask(null)
      setIsAddingTask(false)
      updateReloadComponent(false)
    }
  }, [reloadComponent])

  useEffect(() => {
    if (user && task) {
      showTaskDetail(user.id, task.id)
    }
  }, [usersTasks])
  
  const handleAddTask = (userId: string, task: UserTask) => {
    addTaskToUser(userId, task)
    const user = users.find((user) => user.id === userId)

    if (user) {
      setTask(task)
      setUser(user)
      success('Tarea creada')
    }

    setIsAddingTask(false)
  }

  const showTaskDetail = (userId: string, taskId: string) => {
    const task = usersTasks.find((task) => task.id === taskId)
    const user = users.find((user) => user.id === userId)
    
    if (task && user) {
      setTask(task)
      setUser(user)
    }
  }

  const handleUpdateTaskStatus = (userId: string, taskId: string, status: string) => {
    updateTaskStatus(userId, taskId, status)
    success('Tarea actualizada')
  }

  return (
    <div>
      <Alert />

      <div className="flex my-4 gap-1 flex-wrap">
        {
        (!isAddingTask && !task) && (
          <>
            <span onClick={() => console.log('dasdas')} className='border-1 px-4 py-2 rounded-full text-xs cursor-pointer hover:bg-black hover:text-amber-50'>Todos</span>
            {
              Object.values(StatusOption).map((status) => (
                            <span key={status} onClick={() => console.log('dasdas')} className='border-1 px-4 py-2 rounded-full text-xs cursor-pointer hover:bg-black hover:text-amber-50'>{status}</span>
                          ))
            }
          </>
        )
      }
      </div>

      {
        usersTasks.length === 0 && !isAddingTask && (
          <div className="text-center text-zinc-600 h-100">
            <p className="mt-50 ">Sin Tareas</p>
          </div>
        )
      }

      {
        !task && !isAddingTask && (
          usersTasks.map(({ email, task, description, id, userId, status }) => (
            <TaskCard key={id} task={task} description={description} email={email ?? 'Sin email'} userId={userId} taskId={id} showTaskDetail={showTaskDetail} status={status} />
          ))
        )
      }

      {
        isAddingTask && <CreateTask addTask={handleAddTask} users={users} searchUsers={handleSearchUsers} />
      }

      {
        (task && user) && <TaskDetail task={task} user={user} updateTaskStatus={handleUpdateTaskStatus} />
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
