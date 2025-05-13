import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface Props {
  username: string
  children: ReactNode
}

export const Layout = ({ username, children }: Props) => {
  return (
    <>
      <div className='h-screen grid grid-cols-1 grid-rows-3'>
        <div className='rows-start-1 row-end-1 m-5'>
          <h1 className="text-2xl text-zinc-800">Bienvenido, {username}</h1>
        </div>
  
        <div className='row-start-1 row-end-4 mx-5'>
          {children}
        </div>
      </div>

      <Navbar />
    </>
  )
}
