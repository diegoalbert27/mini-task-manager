import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface Props {
  username: string
  children: ReactNode
}

export const Layout = ({ username, children }: Props) => {
  return (
    <>
      <div className='m-5'>
        <h1 className="text-2xl text-zinc-800">Bienvenido, {username}</h1>
      </div>
      
      <div className='mx-5 mb-22'>
        {children}
      </div>
      
      <Navbar />
    </>
  )
}
