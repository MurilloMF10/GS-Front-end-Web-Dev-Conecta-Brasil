import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import Botao from '../components/comuns/Botao.jsx'
import useAutenticacao from '../hooks/useAutenticacao.js'

function Login() {
  const { entrar, estaAutenticado } = useAutenticacao()
  const localizacao = useLocation()
  const navegar = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [mensagemErro, setMensagemErro] = useState('')

  if (estaAutenticado) {
    return <Navigate replace to="/painel" />
  }

  const enviarFormulario = (evento) => {
    evento.preventDefault()
    setMensagemErro('')

    const resultado = entrar(email, senha)

    if (!resultado.sucesso) {
      setMensagemErro(resultado.mensagem)
      return
    }

    const destino = localizacao.state?.destinoAnterior ?? '/painel'
    navegar(destino, { replace: true })
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-borda bg-branco shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-azul-marinho p-8 text-branco sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
            Acesso restrito
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Portal administrativo
          </h1>
          <p className="mt-5 leading-7 text-white/70">
            Área destinada ao gerenciamento dos comunicados exibidos no
            Conecta Brasil.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-bold text-verde-principal">
              Ambiente acadêmico
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Esta autenticação simula a proteção do painel para demonstrar o
              fluxo da aplicação.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl font-extrabold text-azul-marinho">
            Entre com suas credenciais
          </h2>
          <p className="mt-2 text-texto-suave">
            Utilize o usuário administrativo configurado no projeto.
          </p>

          <form className="mt-8 space-y-6" onSubmit={enviarFormulario}>
            <div>
              <label className="font-bold text-texto" htmlFor="email">
                E-mail
              </label>
              <input
                autoComplete="username"
                className="mt-2 min-h-12 w-full rounded-lg border border-borda bg-branco px-4 text-texto transition-colors placeholder:text-texto-suave focus:border-azul-marca"
                id="email"
                onChange={(evento) => setEmail(evento.target.value)}
                placeholder="admin@exemplo.com"
                required
                type="email"
                value={email}
              />
            </div>

            <div>
              <label className="font-bold text-texto" htmlFor="senha">
                Senha
              </label>
              <div className="relative mt-2">
                <input
                  autoComplete="current-password"
                  className="min-h-12 w-full rounded-lg border border-borda bg-branco px-4 pr-24 text-texto transition-colors placeholder:text-texto-suave focus:border-azul-marca"
                  id="senha"
                  minLength="6"
                  onChange={(evento) => setSenha(evento.target.value)}
                  placeholder="Digite sua senha"
                  required
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                />
                <button
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  className="absolute inset-y-0 right-3 font-bold text-azul-marca"
                  onClick={() => setMostrarSenha((valorAtual) => !valorAtual)}
                  type="button"
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            {mensagemErro && (
              <p
                aria-live="assertive"
                className="rounded-lg border border-perigo/25 bg-red-50 p-4 text-sm font-semibold text-perigo"
                role="alert"
              >
                {mensagemErro}
              </p>
            )}

            <Botao className="w-full" tamanho="grande" type="submit">
              Entrar no portal
            </Botao>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
