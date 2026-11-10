import { useContext } from 'react'
import ContextoAutenticacao from '../contextos/ContextoAutenticacao.js'

function useAutenticacao() {
  const contexto = useContext(ContextoAutenticacao)

  if (!contexto) {
    throw new Error(
      'useAutenticacao deve ser utilizado dentro de ProvedorAutenticacao.',
    )
  }

  return contexto
}

export default useAutenticacao
