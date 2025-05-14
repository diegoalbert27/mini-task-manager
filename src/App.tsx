import { Layout } from './components/Layout';
import './App.css'
import { Home } from './components/Home';
import { Welcome } from './components/Welcome';
import { useUserContext } from './context/UserContext';
import { JSX } from 'react';
import { Users } from './components/Users';

interface Page {
  name: string,
  Component: () => JSX.Element
}

function App() {
  const { isAuthenticated, username, currentPage } = useUserContext()

  const pages: Page[] = [
    {
      Component: Home,
      name: 'Inicio'
    },
    {
      Component: Users,
      name: 'Usuarios'
    }
  ]

  const page = pages.find(page => page.name === currentPage)
  
  return (
    <>
      {
        isAuthenticated ? (
          <Layout username={username}>
            {
              page && page.Component()
            }
          </Layout>
        ) : <Welcome />
      }
    </>
  )
}

export default App
