interface Props {
  status: string,
  handleTaskStatus?: () => void
}

export const TaskStatus = ({ status, handleTaskStatus }: Props) => {
  const statusOptions = [
    { 
      label: 'Pendiente', 
      color: 'bg-red-400 text-red-50', 
      hover: 'hover:bg-red-500 hover:text-red-100' 
    },
    { 
      label: 'Completado', 
      color: 'bg-green-500 text-green-50', 
      hover: 'hover:bg-green-600 hover:text-green-100' 
    },
    { 
      label: 'En progreso', 
      color: 'bg-blue-400 text-blue-50', 
      hover: 'hover:bg-blue-500 hover:text-blue-100' 
    }
  ]
  
  return (
    <>
      <span onClick={() => handleTaskStatus && handleTaskStatus()} className={`${statusOptions.find(option => option.label === status)?.color} px-4 py-1 rounded-full text-xs cursor-pointer ${statusOptions.find(option => option.label === status)?.hover}`}>{status}</span>
    </>
  )
}
