import { ListPlus } from "lucide-react"
import { Task } from "./Task"

export const Tasks = () => {
  return (
    <div>
      <h2 className='text-xl mb-4 text-zinc-800'>Tareas</h2>

      <Task />
      <Task />
      <Task />
      <Task />

      <button onClick={() => console.log('add task')} className="bg-blue-500 text-white p-3 rounded-md hover:bg-sky-700 cursor-pointer shadow-md fixed bottom-25 right-5">
          <ListPlus />
        </button>
    </div>
  )
}
