interface Props {
  name: string
  lastname: string
  email: string
  image?: string
}

export const UserDetail = ({ email, lastname, name, image }: Props) => {
  return (
    <>
      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex flex-col text-zinc-800 text-center mt-8'>
        <div className='w-25 h-25 rounded-full bg-zinc-300 flex items-center justify-center m-auto'>
          {
            image ? 
              <img className="rounded-full p-1" src={image} alt="User Image" /> :
              <span className='text-3xl font-light'>{`${name[0]}${lastname[0]}`}</span>
          }
        </div>

        <h3 className='text-lg'>{name} {lastname}</h3>
        <p className='text-zinc-650'>{email}</p>

        <div className='mt-5'>
          <div className='flex justify-between mb-3'>
            <h2 className='text-lg'>Tareas</h2>
          </div>

          <div className='overflow-auto h-40 p-2'>
            <span className="text-sm text-zinc-500">No hay tareas</span>
          </div>
        </div>
      </div>
    </>
  )
}
