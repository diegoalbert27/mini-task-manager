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
          Content
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
