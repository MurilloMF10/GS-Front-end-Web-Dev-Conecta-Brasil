import { createBrowserRouter } from 'react-router'
import LayoutPublico from '../layouts/LayoutPublico.jsx'
import Avisos from '../pages/Avisos.jsx'
import ComoFunciona from '../pages/ComoFunciona.jsx'
import Equipe from '../pages/Equipe.jsx'
import Faq from '../pages/Faq.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx'
import PainelAdministrativo from '../pages/PainelAdministrativo.jsx'
import RotaPrivada from './RotaPrivada.jsx'

const roteador = createBrowserRouter([
  {
    element: <LayoutPublico />,
    children: [
      { index: true, element: <Home /> },
      { path: 'avisos', element: <Avisos /> },
      { path: 'como-funciona', element: <ComoFunciona /> },
      { path: 'faq', element: <Faq /> },
      { path: 'equipe', element: <Equipe /> },
      { path: 'login', element: <Login /> },
      {
        element: <RotaPrivada />,
        children: [
          { path: 'painel', element: <PainelAdministrativo /> },
        ],
      },
      { path: '*', element: <PaginaNaoEncontrada /> },
    ],
  },
])

export default roteador
