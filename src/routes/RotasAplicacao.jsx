import { createBrowserRouter } from 'react-router'
import LayoutPublico from '../layouts/LayoutPublico.jsx'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada.jsx'

const roteador = createBrowserRouter([
  {
    element: <LayoutPublico />,
    children: [
      { index: true, element: null },
      { path: '*', element: <PaginaNaoEncontrada /> },
    ],
  },
])

export default roteador
