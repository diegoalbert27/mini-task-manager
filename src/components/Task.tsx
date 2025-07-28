export const Task = () => {
  return (
    <div className='border border-zinc-500 rounded-xl p-4 text-left mb-4 shadow-md hover:bg-zinc-100 cursor-pointer'>
      <div className='flex justify-between mb-2'>
        <h1 className='text-lg font'>Tarea 1</h1>
        <span className='bg-red-400 text-red-50 p-2 rounded-full text-xs'>Pendiente</span>
      </div>

      <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint omnis modi consectetur rem repellat ipsam, voluptatem commodi doloribus aspernatur?</p>

      <span className='text-xs text-zinc-600'>owner - James</span>
    </div>
  )
}
