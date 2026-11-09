import CabecalhoPagina from '../components/institucionais/CabecalhoPagina.jsx'
import EstadoCarregamento from '../components/comuns/EstadoCarregamento.jsx'
import EstadoVazio from '../components/comuns/EstadoVazio.jsx'
import MensagemErro from '../components/comuns/MensagemErro.jsx'
import ListaAvisos from '../components/avisos/ListaAvisos.jsx'
import useAvisos from '../hooks/useAvisos.js'

function Avisos() {
  const { avisos, carregando, erro, recarregar } = useAvisos({
    somenteAtivos: true,
  })

  return (
    <>
      <CabecalhoPagina
        descricao="Consulte mudanças de operação, manutenções, ocorrências de trânsito e informações de acessibilidade antes de iniciar o trajeto."
        etiqueta="Informações para sua viagem"
        titulo="Avisos importantes em um só lugar."
      />

      <section
        aria-labelledby="titulo-lista-avisos"
        className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
                Comunicados ativos
              </p>
              <h2
                className="mt-3 text-3xl font-extrabold text-azul-marinho sm:text-4xl"
                id="titulo-lista-avisos"
              >
                Planeje a viagem com informação atualizada.
              </h2>
            </div>

            {!carregando && !erro && avisos.length > 0 && (
              <p aria-live="polite" className="text-sm text-texto-suave">
                {avisos.length}{' '}
                {avisos.length === 1
                  ? 'aviso disponível'
                  : 'avisos disponíveis'}
              </p>
            )}
          </div>

          <div className="mt-10">
            {carregando && (
              <EstadoCarregamento mensagem="Carregando avisos..." />
            )}

            {!carregando && erro && (
              <MensagemErro
                aoTentarNovamente={recarregar}
                mensagem={erro}
                titulo="Não foi possível carregar os avisos"
              />
            )}

            {!carregando && !erro && avisos.length === 0 && (
              <EstadoVazio
                descricao="Não existem comunicados ativos para exibição neste momento."
                titulo="Nenhum aviso ativo"
              />
            )}

            {!carregando && !erro && avisos.length > 0 && (
              <ListaAvisos avisos={avisos} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Avisos
