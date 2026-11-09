import { Navigate, Outlet, useLocation } from 'react-router'
import useAutenticacao from '../hooks/useAutenticacao.js'

function RotaPrivada() {
  const { estaAutenticado } = useAutenticacao()
  const localizacao = useLocation()

  if (!estaAutenticado) {
    return (
      <Navigate
        replace
        state={{ destinoAnterior: localizacao.pathname }}
        to="/login"
      />
    )
  }

  return <Outlet />
}

export default RotaPrivada
