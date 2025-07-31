import { AlertTriangle, Menu } from "lucide-react"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { User } from "../../hooks/useUsers";

type FormInputs = {
	task: string
	description: string
	userId: string
};

interface Props {
	register: UseFormRegister<FormInputs>
	errors: FieldErrors<FormInputs>
	users: User[]
	user: User | null,
	showUserOptions: () => void
	userError: boolean
}

export const TaskForm = ({ register, errors, users, user, showUserOptions, userError }: Props) => {
	const getErrorColor = (error: boolean) => {
		return error ? 'red-500' : 'zinc-500'
	}

	const errorColorTask = getErrorColor(!!errors.task)
	const errorColorDescription = getErrorColor(!!errors.description)
	const errorColorUser = getErrorColor(userError)

	return (
		<>
			<label className={`mt-3 text-${errorColorTask} mb-2 text-sm`} htmlFor="task">Tarea</label>
			<input className={`outline-none text-sm border-1 border-${errorColorTask} text-${errorColorTask} rounded-md p-2`} type="text" id='task' {...register('task', { required: true, maxLength: 64, })} />

			{
				errors.task && <span className='text-sm mt-1 text-red-500'>Tarea es requerida</span>
			}

			<label className={`mt-3 text-${errorColorDescription} mb-2 text-sm`} htmlFor="description">Descripción</label>
			<input className={`outline-none text-sm border-1 border-${errorColorDescription} text-${errorColorDescription} rounded-md p-2`} type="text" id='description' {...register('description', { required: true, maxLength: 64, })} />

			{
				errors.description && <span className='text-sm mt-1 text-red-500'>Descripción es requerida</span>
			}

			<label className={`mt-3 mb-2 text-sm`} htmlFor="userId">Usuario</label>
			<div className={`outline-none text-sm border-1 border-${errorColorUser} text-${errorColorUser} rounded-md p-2 flex items-center gap-2 cursor-pointer hover:bg-zinc-200`} id="userId" onClick={() => showUserOptions()}>
				{
					user ? (
						<div className='p-1 flex gap-4 text-zinc-800 cursor-pointer'>
							<div className='bg-zinc-300 rounded-full w-12 h-12 flex items-center justify-center'>
								<span className='text-2xl font-light p-2'>{`${user.name[0]}${user.lastname[0]}`}</span>
							</div>
							<div className="w-40">
								<h3 className='text-lg truncate'>{`${user.name} ${user.lastname}`}</h3>
								<p className='text-zinc-650 text-sm truncate'>{user.email}</p>
							</div>
            			</div>
					) : (
						<div className="flex items-center gap-2">
							<span className="mr-18">Seleccione un usuario</span> <Menu />
						</div>
					)
				}
			</div>

			{
				(userError) && <span className="text-sm mt-1 text-red-500">Seleccione un usuario</span>
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
		</>
	)
}