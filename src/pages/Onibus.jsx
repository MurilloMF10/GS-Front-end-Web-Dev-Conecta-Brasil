import { lazy, Suspense } from 'react'
import Botao from '../components/comuns/Botao.jsx'
import EstadoCarregamento from '../components/comuns/EstadoCarregamento.jsx'
import EstadoVazio from '../components/comuns/EstadoVazio.jsx'
import MensagemErro from '../components/comuns/MensagemErro.jsx'
import CabecalhoPagina from '../components/institucionais/CabecalhoPagina.jsx'
import FormularioBuscaLinha from '../components/onibus/FormularioBuscaLinha.jsx'
import ListaLinhas from '../components/onibus/ListaLinhas.jsx'
import ListaVeiculos from '../components/onibus/ListaVeiculos.jsx'
import useMonitoramentoOnibus from '../hooks/useMonitoramentoOnibus.js'
import { descreverSentido } from '../utilitarios/linhasOnibus.js'

const MapaOnibus = lazy(() => import('../components/onibus/MapaOnibus.jsx'))

function Onibus() {
  const {
    carregandoLinhas,
    carregandoPosicoes,
    consultarPosicoes,
    erro,
    horarioReferencia,
    linhaSelecionada,
    linhas,
    pesquisarLinhas,
    veiculos,
  } = useMonitoramentoOnibus()

  const veiculosAcessiveis = veiculos.filter(
    (veiculo) => veiculo.acessivel,
  ).length

  return (
    <>
      <CabecalhoPagina
        descricao="Pesquise uma linha e acompanhe a posição informada pelos veículos da SPTrans para planejar melhor o seu deslocamento."
        etiqueta="Monitoramento de ônibus"
        titulo="Veja onde estão os ônibus da sua linha."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FormularioBuscaLinha
            aoPesquisar={pesquisarLinhas}
            carregando={carregandoLinhas}
          />

          {erro && (
            <MensagemErro
              mensagem={erro}
              titulo="Não foi possível concluir a consulta"
            />
          )}

          {!carregandoLinhas && !erro && linhas.length === 0 && (
            <EstadoVazio
              descricao="Pesquise uma linha pelo número ou pelo nome de um terminal para começar."
              icone="bx-bus"
              titulo="Aguardando sua pesquisa"
            />
          )}

          {!carregandoLinhas && linhas.length > 0 && (
            <ListaLinhas
              aoSelecionar={consultarPosicoes}
              linhaSelecionada={linhaSelecionada}
              linhas={linhas}
            />
          )}

          {carregandoPosicoes && (
            <EstadoCarregamento mensagem="Localizando os veículos da linha..." />
          )}

          {!carregandoPosicoes && linhaSelecionada && !erro && (
            <section aria-labelledby="titulo-monitoramento" className="mt-12">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
                    Linha {linhaSelecionada.numero}
                  </p>
                  <h2
                    className="mt-2 text-3xl font-extrabold text-azul-marinho"
                    id="titulo-monitoramento"
                  >
                    {descreverSentido(linhaSelecionada)}
                  </h2>
                </div>
                <Botao
                  onClick={() => consultarPosicoes(linhaSelecionada)}
                  variante="secundario"
                >
                  Atualizar posições
                </Botao>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-borda bg-branco p-5">
                  <p className="text-sm font-bold text-texto-suave">Veículos</p>
                  <p className="mt-1 text-3xl font-extrabold text-azul-marinho">
                    {veiculos.length}
                  </p>
                </div>
                <div className="rounded-xl border border-borda bg-branco p-5">
                  <p className="text-sm font-bold text-texto-suave">Acessíveis</p>
                  <p className="mt-1 text-3xl font-extrabold text-verde-escuro">
                    {veiculosAcessiveis}
                  </p>
                </div>
                <div className="rounded-xl border border-borda bg-branco p-5">
                  <p className="text-sm font-bold text-texto-suave">
                    Horário de referência
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-azul-marinho">
                    {horarioReferencia || '--:--'}
                  </p>
                </div>
              </div>

              {veiculos.length === 0 ? (
                <EstadoVazio
                  descricao="A SPTrans não informou veículos em circulação para este sentido neste momento."
                  titulo="Nenhum veículo localizado"
                />
              ) : (
                <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
                  <Suspense
                    fallback={
                      <EstadoCarregamento mensagem="Preparando o mapa..." />
                    }
                  >
                    <MapaOnibus
                      linha={linhaSelecionada}
                      veiculos={veiculos}
                    />
                  </Suspense>
                  <ListaVeiculos veiculos={veiculos} />
                </div>
              )}
            </section>
          )}

          <p className="mt-12 rounded-xl bg-informacao-claro p-5 text-sm leading-6 text-texto-suave">
            As posições são fornecidas pela API Olho Vivo da SPTrans e podem
            apresentar intervalo entre a captura e a exibição. O Conecta Brasil
            não substitui os canais oficiais de operação.
          </p>
        </div>
      </section>
    </>
  )
}

export default Onibus
