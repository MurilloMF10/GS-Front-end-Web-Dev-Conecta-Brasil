import { RouterProvider } from 'react-router'
import ProvedorAutenticacao from './provedores/ProvedorAutenticacao.jsx'
import roteador from './routes/RotasAplicacao.jsx'

function App() {
  return (
    <ProvedorAutenticacao>
      <RouterProvider router={roteador} />
    </ProvedorAutenticacao>
  )
}

export default App
