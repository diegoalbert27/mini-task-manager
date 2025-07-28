import { useForm } from "react-hook-form"
import { useUserContext } from "../context/UserContext";

type FormInputs = {
  username: string
};

export const Setting = () => {
  const { username, loginWithUsername } = useUserContext()

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      username
    }
  })

  const onSubmit = (myForm: FormInputs) => {
    loginWithUsername(myForm.username)
  }

  const errorColor = errors.username ? 'red-500' : 'zinc-500'

  return (
    <>
      <div className="mt-20 mx-2">
        <h1 className="text-2xl mb-4">Ajustes</h1>
        
        <div className="border-1 border-zinc-500 rounded-lg p-5">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-zinc-700 mb-3" htmlFor="fullname">Nombre de Usuario</label>
            <input className={`outline-none text-sm border-1 border-${errorColor} text-${errorColor} rounded-md p-3`} type="text" placeholder='Nombre' id='fullname' {...register('username', { required: true, maxLength: 64, })} />

            {
              errors.username && <span className='text-sm mt-1 text-center text-red-500'>Nombre es requerido</span>
            }

            <button type="submit" className="mt-3 bg-blue-500 text-white rounded-md p-3 hover:bg-sky-700  cursor-pointer">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </>
  )
}
