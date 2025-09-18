import toast, { Toaster } from "react-hot-toast"

const success = (message: string) => toast.success(message)

const Alert = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          duration: 2000,
          style: {
            position: 'relative',
            bottom: '85px'
          }
        }
      }}
    />
  )
}

export { success, Alert }
