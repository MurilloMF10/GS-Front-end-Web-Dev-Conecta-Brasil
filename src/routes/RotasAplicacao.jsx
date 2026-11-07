import { createBrowserRouter } from 'react-router'
import LayoutPublico from '../layouts/LayoutPublico.jsx'
import Home from '../pages/Home.jsx'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx'

const roteador = createBrowserRouter([
  {
    element: <LayoutPublico />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <PaginaNaoEncontrada /> },
    ],
  },
])

export default roteador
