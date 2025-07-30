interface Props {
  task: string
  description: string
  email: string
}

export const TaskCard = ({ task, description, email }: Props) => {
  return (
    <div className='border border-zinc-500 rounded-xl p-4 text-left mb-4 shadow-md hover:bg-zinc-100 cursor-pointer'>
      <div className='flex justify-between mb-2'>
        <h1 className='text-lg font'>{task}</h1>
        <span className='bg-red-400 text-red-50 p-2 rounded-full text-xs'>Pendiente</span>
      </div>

      <p className='text-sm'>{description}</p>

      <span className='text-xs text-zinc-600'>De: {email}</span>
    </div>
  )
}
