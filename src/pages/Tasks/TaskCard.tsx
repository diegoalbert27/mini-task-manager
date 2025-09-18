import { TaskStatus } from "../../components/TaskStatus"

interface Props {
  task: string
  description: string
  email: string
  userId: string
  taskId: string
  showTaskDetail: (userId: string, taskId: string) => void
  status: string
}

export const TaskCard = ({ task, description, email, userId, taskId, showTaskDetail, status }: Props) => {
  return (
    <div onClick={() => showTaskDetail(userId, taskId)} className='border border-zinc-500 rounded-xl p-4 text-left mb-4 shadow-md hover:bg-zinc-100 cursor-pointer'>
      <div className='flex justify-between mb-2 flex-wrap gap-2'>
        <h1 className='text-lg font'>{task}</h1>
        <TaskStatus status={status} />
      </div>

      <p className='text-sm'>{description}</p>

      <span className='text-xs text-zinc-600'>De: {email}</span>
    </div>
  )
}
