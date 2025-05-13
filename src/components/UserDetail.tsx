import { Filter } from "lucide-react"
import { Task } from "./Task"

export const UserDetail = () => {
  return (
    <>
      <h2 className='text-xl mb-4 text-zinc-800'>Detalle del usuario</h2>

      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex flex-col text-zinc-800 text-center'>
        <div className='w-25 h-25 rounded-full bg-zinc-300 flex items-center justify-center m-auto'>
          <span className='text-3xl font-light'>J</span>
        </div>

        <h3 className='text-lg'>James Baker</h3>
        <p className='text-zinc-650'>jamesbaker@email.com</p>

        <div className='mt-5'>
          <div className='flex justify-between mb-3'>
            <h2 className='text-lg'>Tareas</h2>
            <Filter className='text-zinc-600' />
          </div>

          <div className='overflow-auto h-50 p-2'>
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </>
  )
}
