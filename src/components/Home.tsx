import { Task } from "./Task"

export const Home = () => {
  return (
    <div>
      <h2 className='text-xl mb-4 text-zinc-800'>Tareas Recientes</h2>

      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}
