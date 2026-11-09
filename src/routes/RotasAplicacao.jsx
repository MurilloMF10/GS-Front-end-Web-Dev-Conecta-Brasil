import { createBrowserRouter } from 'react-router'
import LayoutPublico from '../layouts/LayoutPublico.jsx'
import Avisos from '../pages/Avisos.jsx'
import ComoFunciona from '../pages/ComoFunciona.jsx'
import Equipe from '../pages/Equipe.jsx'
import Faq from '../pages/Faq.jsx'
import Home from '../pages/Home.jsx'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx'

const roteador = createBrowserRouter([
  {
    element: <LayoutPublico />,
    children: [
      { index: true, element: <Home /> },
      { path: 'avisos', element: <Avisos /> },
      { path: 'como-funciona', element: <ComoFunciona /> },
      { path: 'faq', element: <Faq /> },
      { path: 'equipe', element: <Equipe /> },
      { path: '*', element: <PaginaNaoEncontrada /> },
    ],
  },
])

export default roteador
