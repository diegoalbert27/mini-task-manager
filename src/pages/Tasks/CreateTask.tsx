import { useForm } from "react-hook-form";
import { User, UserTask } from "../../hooks/useUsers";
import { v4 as uuid } from 'uuid'
import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { UsersOption } from "./UsersOption";

type FormInputs = {
  task: string
  description: string
  userId: string
};

interface Props {
  addTask: (userId: string, task: UserTask) => void,
  users: User[]
  searchUsers: (search: string) => void
}

export const CreateTask = ({ addTask, users, searchUsers }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      description: '',
      task: ''
    }
  })

  const [user, setUser] = useState<User | null>(null)
  const [showUserOptions, setShowUserOptions] = useState(false)

  const [userError, setUserError] = useState(false)

  const onSubmit = ({ description, task }: FormInputs) => {
    if (user) {
      setUserError(false)
      addTask(user.id, {
        description,
        task,
        id: uuid()
      })
    } else {
      setUserError(true)
    }
  }

  const handleChooseUser = (user: User) => {
    setUser(user)
    setShowUserOptions(false)

    if (user) {
      setUserError(false)
    } else {
      setUserError(true)
    }
  }

  return (
    <div className="mx-3 mt-10 border border-zinc-500 rounded-xl py-4 px-5 text-zinc-800">

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {
          !showUserOptions ? <TaskForm register={register} errors={errors} users={users} user={user} showUserOptions={() => setShowUserOptions(true)} userError={userError} /> : <UsersOption searchUsers={searchUsers} users={users} chooseUser={handleChooseUser} />
        }
      </form>
    </div>
  )
}
