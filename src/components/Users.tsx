export const Users = () => {
  return (
    <>
      <h2 className='text-xl mb-4 text-zinc-800'>Usuarios</h2>

      <div className='border border-zinc-500 rounded-xl py-4 px-5 flex gap-4 text-zinc-800'>
        <div className='bg-zinc-300 rounded-full w-12 h-12 flex items-center justify-center'>
          <span className='text-2xl font-light'>J</span>
        </div>
        <div>
          <h3 className='text-lg'>James Baker</h3>
          <p className='text-zinc-650 text-sm'>jamesbaker@email.com</p>
        </div>
      </div>
    </>
  )
}
