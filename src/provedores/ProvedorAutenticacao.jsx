import { useMemo, useState } from 'react'
import ContextoAutenticacao from '../contextos/ContextoAutenticacao.js'

const CHAVE_SESSAO = 'conecta-brasil:sessao-administrativa'

const obterCredenciaisConfiguradas = () => ({
  email: import.meta.env.VITE_ADMIN_EMAIL?.trim(),
  senha: import.meta.env.VITE_ADMIN_SENHA,
})

const recuperarUsuario = () => {
  try {
    const sessaoSalva = sessionStorage.getItem(CHAVE_SESSAO)

    if (!sessaoSalva) {
      return null
    }

    const usuarioSalvo = JSON.parse(sessaoSalva)
    const { email } = obterCredenciaisConfiguradas()
    const sessaoValida =
      email &&
      usuarioSalvo?.email?.toLowerCase() === email.toLowerCase()

    if (!sessaoValida) {
      sessionStorage.removeItem(CHAVE_SESSAO)
      return null
    }

    return usuarioSalvo
  } catch {
    sessionStorage.removeItem(CHAVE_SESSAO)
    return null
  }
}

function ProvedorAutenticacao({ children }) {
  const [usuario, setUsuario] = useState(recuperarUsuario)

  const entrar = (email, senha) => {
    const {
      email: emailConfigurado,
      senha: senhaConfigurada,
    } = obterCredenciaisConfiguradas()

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

    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuarioAutenticado))
    setUsuario(usuarioAutenticado)

    return { sucesso: true }
  }

  const sair = () => {
    sessionStorage.removeItem(CHAVE_SESSAO)
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
