import { useUserContext } from "../context/UserContext"
import { NavItems } from "./Navbar"

interface Props {
  navItem: NavItems
} 

export const NavItem = ({ navItem}: Props) => {
  const { currentPage, changeCurrentPage } = useUserContext()
  
  const { name, Icon } = navItem

  const currentColor = currentPage === name 
    ? 'blue' : 'zinc'

  const handleClick = () => {
    changeCurrentPage(name)
  }
  
  return (
    <li className={`hover:text-${currentColor}-700 cursor-pointer text-${currentColor}-500`} onClick={handleClick}>
      <Icon className='m-auto' />
      <span className="text-xs">{name}</span>
    </li>
  )
}
