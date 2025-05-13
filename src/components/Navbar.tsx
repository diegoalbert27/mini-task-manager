import { CheckSquare, House, Settings2, Users } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className='border-t-1 border-zinc-400 fixed bottom-0 left-0 w-full bg-white'>
      <ul className='flex flex-row justify-around text-zinc-600 p-3'>
        <li>
          <Users className='m-auto' />
          <span className='text-xs'>Usuarios</span>
        </li>
        <li>
          <House className='m-auto' />
          <span className='text-xs'>Inicio</span>
        </li>
        <li>
          <CheckSquare className='m-auto' />
          <span className='text-xs'>Tareas</span>
        </li>
        <li>
          <Settings2 className='m-auto' />
          <span className='text-xs'>Configuracion</span>
        </li>
      </ul>
    </nav>
  )
}
