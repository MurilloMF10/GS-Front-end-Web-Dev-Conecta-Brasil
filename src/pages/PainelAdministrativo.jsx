import { Link, useNavigate } from 'react-router'
import Botao from '../components/comuns/Botao.jsx'
import useAutenticacao from '../hooks/useAutenticacao.js'

function PainelAdministrativo() {
  const { sair, usuario } = useAutenticacao()
  const navegar = useNavigate()

  const encerrarSessao = () => {
    sair()
    navegar('/login', { replace: true })
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 rounded-2xl bg-azul-marinho p-7 text-branco sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
              Área protegida
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Painel administrativo
            </h1>
            <p className="mt-3 text-white/70">
              Sessão iniciada como {usuario?.email}.
            </p>
          </div>

          <Botao onClick={encerrarSessao} variante="perigo">
            Encerrar sessão
          </Botao>
        </div>

        <div className="mt-8 rounded-2xl border border-borda bg-branco p-8 shadow-sm">
          <span className="grid size-12 place-items-center rounded-full bg-verde-claro text-2xl text-verde-escuro">
            ✓
          </span>
          <h2 className="mt-5 text-2xl font-extrabold text-azul-marinho">
            Acesso autorizado
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-texto-suave">
            A autenticação e a proteção desta rota estão funcionando. O
            gerenciamento completo dos avisos será implementado na próxima
            parte da etapa.
          </p>
          <Link
            className="mt-6 inline-flex font-bold text-azul-marca underline decoration-2 underline-offset-4"
            to="/avisos"
          >
            Visualizar avisos públicos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PainelAdministrativo
