import { useState } from "react"
import { UserTask } from "../../hooks/useUsers"
import { User } from "./Tasks"
import { TaskStatus } from "../../components/TaskStatus"
import { StatusOption } from "../../enums/statusOption.enum"

interface Props {
  task: UserTask
  user: User
  updateTaskStatus: (userId: string, taskId: string, status: string) => void
}

export const TaskDetail = ({ task, user, updateTaskStatus }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  
  const handleEditStatus = () => setIsEditing(!isEditing)

  const handleNewStatus = (status: string) => {
    updateTaskStatus(user.id, task.id, status)
    setIsEditing(false)
  }

  const statusOptions = Object.values(StatusOption).filter(status => status !== StatusOption.ALL)
  
  return (
    <>
      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex flex-col text-zinc-800 text-center mt-8 lg:max-w-2xl lg:mx-auto'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 rounded-full bg-zinc-300 flex items-center justify-center mr-3'>
            <span className='text-xl font-light'>
              {user.name[0]}
            </span>
          </div>
          <span className='text-base text-zinc-800'>{user.name} {user.lastname}</span>
        </div>

        <h2 className='text-xl font-normal text-zinc-800 text-left mb-2'>{task.task}</h2>
        <p className='text-sm text-zinc-700 text-left mb-4'>{task.description}</p>
        <div className="flex justify-end">
          <div className={`mr-1 ${isEditing ? 'hidden' : ''}`}>
            <TaskStatus status={task.status} handleTaskStatus={handleEditStatus} />
          </div>
          
          <div className={`flex flex-col gap-2 ${isEditing ? '' : 'hidden'}`}>
            {
              statusOptions.map((status) => (
                <TaskStatus key={status} status={status} handleTaskStatus={() => handleNewStatus(status)} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
