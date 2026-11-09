import { Link } from 'react-router'
import EstadoCarregamento from '../comuns/EstadoCarregamento.jsx'
import EstadoVazio from '../comuns/EstadoVazio.jsx'
import MensagemErro from '../comuns/MensagemErro.jsx'
import ListaAvisos from '../avisos/ListaAvisos.jsx'
import useAvisos from '../../hooks/useAvisos.js'

function SecaoAvisosRecentes() {
  const { avisos, carregando, erro, recarregar } = useAvisos({
    somenteAtivos: true,
  })
  const avisosRecentes = avisos.slice(0, 3)

  return (
    <section className="bg-branco px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
            Avisos de operação
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
            Comunicados importantes para planejar o trajeto.
          </h2>
          <p className="mt-5 leading-7 text-texto-suave">
            Confira mudanças de operação e outras informações que podem afetar
            sua viagem.
          </p>
        </div>

        <div className="mt-10">
          {carregando && (
            <EstadoCarregamento mensagem="Carregando avisos recentes..." />
          )}

          {!carregando && erro && (
            <MensagemErro
              aoTentarNovamente={recarregar}
              mensagem={erro}
              titulo="Não foi possível carregar os avisos"
            />
          )}

          {!carregando && !erro && avisosRecentes.length === 0 && (
            <EstadoVazio
              descricao="Não existem comunicados ativos para exibição neste momento."
              titulo="Nenhum aviso ativo"
            />
          )}

          {!carregando && !erro && avisosRecentes.length > 0 && (
            <>
              <ListaAvisos avisos={avisosRecentes} />
              <div className="mt-10 text-center">
                <Link
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-azul-marca px-5 py-2.5 font-bold text-azul-marca transition-colors hover:bg-informacao-claro"
                  to="/avisos"
                >
                  Ver todos os avisos
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default SecaoAvisosRecentes
