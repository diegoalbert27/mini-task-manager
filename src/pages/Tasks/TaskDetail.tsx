import { UserTask } from "../../hooks/useUsers"
import { User } from "./Tasks"

interface Props {
  task: UserTask
  user: User
}

export const TaskDetail = ({ task, user }: Props) => {
  return (
    <>
      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex flex-col text-zinc-800 text-center mt-8'>
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
          <span className='bg-red-400 text-red-50 px-4 py-1 rounded-full text-xs'>Pendiente</span>
        </div>
      </div>
    </>
  )
}
