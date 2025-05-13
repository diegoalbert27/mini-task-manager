import { Layout } from './components/Layout';
import './App.css'
import { Home } from './components/Home';
import { Welcome } from './components/Welcome';
import { useUserContext } from './context/UserContext';

function App() {
  const { isAuthenticated, username } = useUserContext()
  console.log(isAuthenticated);
  
  return (
    <>
      {
        isAuthenticated ? (
          <Layout username={username}>
            <Home />
          </Layout>
        ) : <Welcome />
      }
    </>
  )
}

export default App
