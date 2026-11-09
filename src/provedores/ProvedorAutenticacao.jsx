import { useMemo, useState } from 'react'
import ContextoAutenticacao from '../contextos/ContextoAutenticacao.js'

const CHAVE_SESSAO = 'conecta-brasil:sessao-administrativa'

const recuperarUsuario = () => {
  try {
    const sessaoSalva = localStorage.getItem(CHAVE_SESSAO)
    return sessaoSalva ? JSON.parse(sessaoSalva) : null
  } catch {
    localStorage.removeItem(CHAVE_SESSAO)
    return null
  }
}

function ProvedorAutenticacao({ children }) {
  const [usuario, setUsuario] = useState(recuperarUsuario)

  const entrar = (email, senha) => {
    const emailConfigurado = import.meta.env.VITE_ADMIN_EMAIL?.trim()
    const senhaConfigurada = import.meta.env.VITE_ADMIN_SENHA

    if (!emailConfigurado || !senhaConfigurada) {
      return {
        mensagem:
          'As credenciais administrativas não foram configuradas no arquivo .env.',
        sucesso: false,
      }
    }

    const credenciaisValidas =
      email.trim().toLowerCase() === emailConfigurado.toLowerCase() &&
      senha === senhaConfigurada

    if (!credenciaisValidas) {
      return {
        mensagem: 'E-mail ou senha inválidos.',
        sucesso: false,
      }
    }

    const usuarioAutenticado = {
      email: emailConfigurado,
      nome: 'Administrador',
    }

    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuarioAutenticado))
    setUsuario(usuarioAutenticado)

    return { sucesso: true }
  }

  const sair = () => {
    localStorage.removeItem(CHAVE_SESSAO)
    setUsuario(null)
  }

  const valorContexto = useMemo(
    () => ({
      entrar,
      estaAutenticado: Boolean(usuario),
      sair,
      usuario,
    }),
    [usuario],
  )

  return (
    <ContextoAutenticacao.Provider value={valorContexto}>
      {children}
    </ContextoAutenticacao.Provider>
  )
}

export default ProvedorAutenticacao
