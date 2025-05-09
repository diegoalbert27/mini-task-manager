export const Welcome = () => {
  return (
    <div className="flex flex-col justify-center h-svh mx-12">
      <div className="border-1 border-zinc-500 rounded-lg p-5">
        <h1 className="text-2xl">Bienvenido</h1>
        
        <form className="mt-8 flex flex-col">
          <label className="text-zinc-700 text-center mb-3" htmlFor="fullname">Ingresa tu nombre completo para iniciar</label>
          <input className="text-sm border-1 border-zinc-500 rounded-md p-3 outline-none mb-3" type="text" placeholder='Nombre' id='fullname' />
          <button className="bg-blue-500 text-white rounded-md p-3">Ingresar</button>
        </form>
      </div>
    </div>
  )
}
