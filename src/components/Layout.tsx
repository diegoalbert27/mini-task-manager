import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { useUserContext } from '../context/UserContext'
import { CheckSquare, Settings2, Users } from 'lucide-react'

interface Props {
  username: string
  children: ReactNode
}

export const Layout = ({ username, children }: Props) => {
  const { currentPage, changeCurrentPage, updateReloadComponent } = useUserContext()

  const navItems = [
    { Icon: Users, name: 'Usuarios' },
    { Icon: CheckSquare, name: 'Tareas' },
    { Icon: Settings2, name: 'Ajustes' }
  ]

  const handleNavClick = (name: string) => {
    if (name === currentPage) {
      updateReloadComponent(true)
    }
    changeCurrentPage(name)
  }

  return (
    <>
      <header className='border-b border-zinc-200 bg-white'>
        <div className='m-5 lg:max-w-7xl lg:mx-auto lg:px-8 lg:my-0 lg:py-4 lg:flex lg:justify-between lg:items-center'>
          <h1 className="text-2xl text-zinc-800">Bienvenido, {username}</h1>
          
          <nav className='hidden lg:flex lg:gap-8'>
            {navItems.map(({ Icon, name }) => {
              const isActive = currentPage === name
              const textColor = isActive ? 'text-blue-600' : 'text-zinc-600'
              const hoverColor = isActive ? 'hover:text-blue-700' : 'hover:text-zinc-700'
              
              return (
                <button
                  key={name}
                  onClick={() => handleNavClick(name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${textColor} ${hoverColor} hover:bg-zinc-50`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </header>
      
      <div className='mx-5 mb-22 lg:max-w-7xl lg:mx-auto lg:px-8 lg:mt-6 lg:mb-6'>
        {children}
      </div>
      
      <div className='lg:hidden'>
        <Navbar />
      </div>
    </>
  )
}
