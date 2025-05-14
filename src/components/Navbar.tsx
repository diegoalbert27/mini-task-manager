import { NavItem } from "./NavItem"

import { CheckSquare, House, LucideProps, Settings2, Users } from "lucide-react"
import { ForwardRefExoticComponent } from 'react'
import { v4 as uuid } from 'uuid'

export interface NavItems {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>,
  name: string,
}

export const Navbar = () => {
  const navItems: NavItems[] = [
    { Icon: Users, name: 'Usuarios' },
    { Icon: House, name: 'Inicio' },
    { Icon: CheckSquare, name: 'Tareas' },
    { Icon: Settings2, name: 'Configuracion' }
  ];

  return (
    <nav className='border-t-1 border-zinc-400 fixed bottom-0 left-0 w-full bg-white'>
      <ul className='flex flex-row justify-around text-zinc-600 p-3'>
        {
          navItems.map(navItem => (
            <NavItem key={uuid()} navItem={navItem} />
          ))
        }
      </ul>
    </nav>
  )
}
