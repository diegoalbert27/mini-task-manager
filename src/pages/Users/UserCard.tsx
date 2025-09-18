import { User, UserTask } from "../../hooks/useUsers"

interface Props {
  name: string
  lastname: string
  email: string
  tasks: UserTask[]
  id: string
  changeUserDetail: (user: User) => void
}

export const UserCard = ({ email, lastname, name, tasks, id, changeUserDetail }: Props) => {  
  const handleClick = () => {
    changeUserDetail({
      id,
      tasks,
      name,
      email,
      lastname,
    })
  }

  return (
    <div onClick={handleClick} className='mb-3 lg:mb-0 border border-zinc-500 rounded-xl py-4 px-5 flex gap-4 text-zinc-800 hover:bg-zinc-100 cursor-pointer shadow-md h-fit'>
      <div className='bg-zinc-300 rounded-full w-12 h-12 flex items-center justify-center'>
        <span className='text-2xl font-light'>{`${name[0]}${lastname[0]}`}</span>
      </div>
      <div>
        <h3 className='text-lg'>{`${name} ${lastname}`}</h3>
        <p className='text-zinc-650 text-sm'>{email}</p>
      </div>
    </div>
  )
}
