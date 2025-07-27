import { User } from "../hooks/useUsers"

interface Props {
  name: string
  lastname: string
  email: string
  image?: string
  changeUserDetail: (user: User) => void
}

export const UserCard = ({ email, lastname, name, image, changeUserDetail }: Props) => {  
  const handleClick = () => {
    changeUserDetail({
      name,
      email,
      lastname,
      image
    })
  }

  return (
    <div onClick={handleClick} className='mb-3 border border-zinc-500 rounded-xl py-4 px-5 flex gap-4 text-zinc-800 hover:bg-zinc-100 cursor-pointer'>
      <div className='bg-zinc-300 rounded-full w-12 h-12 flex items-center justify-center'>
        {
          image ? 
            <img className="rounded-full p-1" src={image} alt="User Image" /> : 
            <span className='text-2xl font-light'>{`${name[0]}${lastname[0]}`}</span>
        }
      </div>
      <div>
        <h3 className='text-lg'>{`${name} ${lastname}`}</h3>
        <p className='text-zinc-650 text-sm'>{email}</p>
      </div>
    </div>
  )
}
