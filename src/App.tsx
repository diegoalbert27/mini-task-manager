import { Layout } from './components/Layout';
import './App.css'
import { Tasks } from './pages/Tasks/Tasks';
import { Welcome } from './pages/Welcome';
import { useUserContext } from './context/UserContext';
import { JSX } from 'react';
import { Users } from './pages/Users/Users';
import { Setting } from './pages/Setting/Setting';

interface Page {
  name: string,
  Component: () => JSX.Element
}

function App() {
  const { isAuthenticated, username, currentPage } = useUserContext()

  const pages: Page[] = [
    {
      Component: Tasks,
      name: 'Tareas'
    },
    {
      Component: Users,
      name: 'Usuarios'
    },
    {
      Component: Setting,
      name: 'Ajustes'
    }
  ]

  const page = pages.find(page => page.name === currentPage)
  
  const renderPageContent = () => {
    if (!page) return null
    const { Component } = page
    return <Component />
  }
  
  return (
    <>
      {
        isAuthenticated ? (
          <Layout username={username}>
            {
              renderPageContent()
            }
          </Layout>
        ) : <Welcome />
      }
    </>
  )
}

export default App
