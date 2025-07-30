  import { useUserContext } from "../context/UserContext"
import { NavItems } from "./Navbar"

interface Props {
  navItem: NavItems
} 

export const NavItem = ({ navItem }: Props) => {
  const { currentPage, changeCurrentPage, updateReloadComponent } = useUserContext()
  
  const { name, Icon } = navItem

  const currentColor = currentPage === name 
    ? 'blue' : 'zinc'

  const handleClick = () => {
    if (name === currentPage) {
      updateReloadComponent(true)
    }
    
    changeCurrentPage(name)
  }
  
  return (
    <li className={`hover:text-${currentColor}-700 cursor-pointer text-${currentColor}-500`} onClick={handleClick}>
      <Icon className='m-auto' />
      <span className="text-xs">{name}</span>
    </li>
  )
}
