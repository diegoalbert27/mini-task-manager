import { CheckSquare, House, Settings2, Users } from 'lucide-react'
import './App.css'

// import { Welcome } from './components/Welcome'

function App() {

  return (
    <>
      {/* <Welcome /> */}

      <div className='h-screen grid grid-cols-1 grid-rows-3'>
        <div className='rows-start-1 row-end-1 m-5'>
          <h1 className="text-2xl text-zinc-800">Bienvenido, {"Diego Hinagas"}</h1>
        </div>
   
        <div className='row-start-1 row-end-4 mx-5'>
          <h2 className='text-xl mb-4 text-zinc-800'>Usuarios</h2>

          <div className='border border-zinc-500 rounded-xl py-4 px-5 flex gap-4 text-zinc-800'>
            <div className='bg-zinc-300 rounded-full w-12 text-center h-12 flex items-center justify-center'>
              <span className='text-2xl font-light'>J</span>
            </div>
            <div>
              <h3 className='text-lg'>James Baker</h3>
              <p className='text-zinc-650 text-sm'>jamesbaker@email.com</p>
            </div>
          </div>
        </div>
  
        <nav className='border-t-1 border-zinc-400 row-start-4'>
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
      </div>
    </>
  )
}

export default App
