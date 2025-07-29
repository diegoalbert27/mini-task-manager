import { useForm } from "react-hook-form";
import { User, UserTask } from "../hooks/useUsers";
import { AlertTriangle } from "lucide-react";
import { v4 as uuid } from 'uuid'

type FormInputs = {
  task: string
  description: string
  userId: string
};

interface Props {
  addTask: (userId: string, task: UserTask) => void,
  users: User[]
}

export const CreateTask = ({ addTask, users }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      description: '',
      task: '',
      userId: ''
    }
  })

  const onSubmit = ({ description, task, userId }: FormInputs) => {
    addTask(userId, {
      description,
      task,
      id: uuid()
    })
  }

  const errorColorTask = errors.task ? 'red-500' : 'zinc-500'
  const errorColorDescription = errors.description ? 'red-500' : 'zinc-500'

  return (
    <div className="mx-3 mt-10 border border-zinc-500 rounded-xl py-4 px-5 text-zinc-800">

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className={`mt-3 text-${errorColorTask} mb-2 text-sm`} htmlFor="task">Tarea</label>
        <input className={`outline-none text-sm border-1 border-${errorColorTask} text-${errorColorTask} rounded-md p-2`} type="text" placeholder='Tarea' id='task' {...register('task', { required: true, maxLength: 64, })} />

        {
          errors.task && <span className='text-sm mt-1 text-red-500'>Tarea es requerida</span>
        }

        <label className={`mt-3 text-${errorColorDescription} mb-2 text-sm`} htmlFor="description">Descripción</label>
        <input className={`outline-none text-sm border-1 border-${errorColorDescription} text-${errorColorDescription} rounded-md p-2`} type="text" placeholder='Descripción' id='description' {...register('description', { required: true, maxLength: 64, })} />

        {
          errors.description && <span className='text-sm mt-1 text-red-500'>Descripción es requerida</span>
        }

        <label className={`mt-3 mb-2 text-sm`} htmlFor="userId">Usuarios</label>
        <select className={`outline-none text-sm border-1 border-zinc-500 text-zinc-500 rounded-md p-2`} id="userId" {...register('userId', { required: true })} value={users.length > 0 ? users[0].id : ''}>
          {
            users.length > 0 ? users.map((user) => (
              <option key={user.id} value={user.id}>{user.name} {user.lastname} - {user.email}</option>
            )) : <option selected>No hay usuarios para asignar</option>
          }
        </select>

        {
          errors.userId && <span className='text-sm mt-1 text-red-500'>Usuario es requerido</span>
        }

        {
          users.length > 0 && <button type="submit" className="mt-5 bg-blue-500 text-white rounded-full p-3 text-sm hover:bg-sky-700 cursor-pointer">Crear Tarea</button>
        }

        {
          users.length === 0 && (
            <p className='mt-5 text-yellow-600 text-center flex justify-center items-center gap-2'>
              <AlertTriangle /> No hay usuarios para asignar
            </p>
          )
        }
      </form>
    </div>
  )
}
