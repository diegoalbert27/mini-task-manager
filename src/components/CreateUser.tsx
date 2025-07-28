import { useForm } from "react-hook-form";

import { User } from '../hooks/useUsers'

type FormInputs = {
  name: string
  lastname: string
  email: string
};

interface Props {
  addUser: (user: User) => void
}

export const CreateUser = ({ addUser }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      lastname: '',
      name: ''
    }
  })

  const onSubmit = ({ email, lastname, name }: FormInputs) => {
    addUser({
      email,
      lastname,
      name,
    })
  }

  const errorColorName = errors.name ? 'red-500' : 'zinc-500'
  const errorColorLasname = errors.lastname ? 'red-500' : 'zinc-500'
  const errorColorEmail = errors.email ? 'red-500' : 'zinc-500'

  return (
    <div className="mx-3 mt-10 border border-zinc-500 rounded-xl py-4 px-5 text-zinc-800">

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className={`mt-3 text-${errorColorName} mb-2 text-sm`} htmlFor="name">Nombre</label>
        <input className={`outline-none text-sm border-1 border-${errorColorName} text-${errorColorName} rounded-md p-2`} type="text" placeholder='Nombre' id='name' {...register('name', { required: true, maxLength: 64, })} />

        {
          errors.name && <span className='text-sm mt-1 text-red-500'>Nombre es requerido</span>
        }

        <label className={`mt-3 text-${errorColorLasname} mb-2 text-sm`} htmlFor="lastname">Apellido</label>
        <input className={`outline-none text-sm border-1 border-${errorColorLasname} text-${errorColorLasname} rounded-md p-2`} type="text" placeholder='Apellido' id='lastname' {...register('lastname', { required: true, maxLength: 64, })} />

        {
          errors.lastname && <span className='text-sm mt-1 text-red-500'>Apellido es requerido</span>
        }

        <label className={`mt-3 text-${errorColorEmail} mb-2 text-sm`} htmlFor="email">Email</label>
        <input className={`outline-none text-sm border-1 border-${errorColorEmail} text-${errorColorEmail} rounded-md p-2`} type="email" placeholder='Email' id='email' {...register('email', { required: true, maxLength: 64, })} />

        {
          errors.email && <span className='text-sm mt-1 text-red-500'>Email es requerido</span>
        }

        <button type="submit" className="mt-5 bg-blue-500 text-white rounded-full p-3 text-sm hover:bg-sky-700 cursor-pointer">Crear</button>
      </form>
    </div>
  )
}
