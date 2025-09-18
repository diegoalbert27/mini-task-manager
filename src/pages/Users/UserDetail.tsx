import { TaskCard } from "../Tasks/TaskCard"
import { UserTask } from "../../hooks/useUsers"
import { useEffect, useState } from "react"
import { Task } from "../Tasks/Tasks"

interface Props {
  name: string
  lastname: string
  email: string
  userId: string
  userTasks: UserTask[]
}

export const UserDetail = ({ email, userId, lastname, name, userTasks }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const tasks = userTasks.map((task) => ({
      id: task.id,
      task: task.task,
      description: task.description,
      email: email,
      userId: userId,
      status: task.status
    }))

    setTasks(tasks)
  }, [userTasks])

  const showTaskDetail = (userId: string, taskId: string) => {
    console.log(userId, taskId)
  }
  
  return (
    <>
      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex flex-col text-zinc-800 text-center mt-8 lg:max-w-4xl lg:mx-auto'>
        <div className='w-25 h-25 rounded-full bg-zinc-300 flex items-center justify-center m-auto'>
          <span className='text-3xl font-light'>{`${name[0]}${lastname[0]}`}</span>
        </div>

        <h3 className='text-lg'>{name} {lastname}</h3>
        <p className='text-zinc-650'>{email}</p>

        <div className='mt-5'>
          <div className='flex justify-between mb-3'>
            <h2 className='text-lg'>Tareas</h2>
          </div>

          <div className='overflow-auto h-40 lg:h-60 p-2'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
              {
                tasks.length > 0 ? tasks.map((task) => (
                  <TaskCard key={task.id} task={task.task} description={task.description} email={task.email} userId={task.userId} taskId={task.id} showTaskDetail={showTaskDetail} status={task.status} />
                )) : <span className="text-sm text-zinc-500">No hay tareas</span>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
