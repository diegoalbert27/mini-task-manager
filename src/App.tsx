import { Layout } from './components/Layout';
import './App.css'
import { Tasks } from './components/Tasks';
import { Welcome } from './components/Welcome';
import { useUserContext } from './context/UserContext';
import { JSX } from 'react';
import { Users } from './components/Users';
import { Setting } from './components/Setting';

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
