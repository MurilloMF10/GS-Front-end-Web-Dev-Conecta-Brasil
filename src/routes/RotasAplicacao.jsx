import { createBrowserRouter } from 'react-router'

const roteador = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/onibus', element: <Onibus /> },
  { path: '/lotacao', element: <Lotacao /> },
  { path: '/avisos', element: <Avisos /> },
  { path: '/como-funciona', element: <ComoFunciona /> },
  { path: '/faq', element: <Faq /> },
  { path: '/equipe', element: <Equipe /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <PainelAdministrativo /> },
  { path: '/admin/avisos', element: <GerenciarAvisos /> },
  { path: '/admin/avisos/novo', element: <NovoAviso /> },
  { path: '/admin/avisos/:id/editar', element: <EditarAviso /> },
  { path: '*', element: <PaginaNaoEncontrada /> },
])

export default roteador
