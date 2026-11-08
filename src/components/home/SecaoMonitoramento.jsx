import { Link } from 'react-router'

const niveisLotacao = [
  { nome: 'Baixa', cor: 'bg-sucesso', descricao: 'Viagem mais confortável' },
  { nome: 'Moderada', cor: 'bg-atencao', descricao: 'Atenção ao movimento' },
  { nome: 'Alta', cor: 'bg-lotacao-alta', descricao: 'Veículo próximo da capacidade' },
  { nome: 'Crítica', cor: 'bg-perigo', descricao: 'Considere outra opção' },
]

function SecaoMonitoramento() {
  return (
    <section className="bg-branco px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
            Informação em um só lugar
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
            Localização e lotação para apoiar sua decisão.
          </h2>
          <p className="mt-5 text-base leading-7 text-texto-suave sm:text-lg">
            O protótipo reúne dados de mobilidade e a contagem de pessoas em
            uma experiência pensada para ser rápida e fácil de consultar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-borda bg-fundo shadow-sm">
            <div className="relative h-56 overflow-hidden bg-informacao-claro p-6">
              <span className="rounded-full bg-branco px-3 py-1.5 text-xs font-bold text-azul-marca shadow-sm">
                Prévia do protótipo
              </span>
              <div className="absolute inset-x-8 bottom-10 h-1 rounded-full bg-azul-marca/30">
                <span className="absolute -top-2 left-[18%] size-5 rounded-full border-4 border-branco bg-azul-marca shadow" />
                <span className="absolute -top-2 left-[52%] size-5 rounded-full border-4 border-branco bg-verde-principal shadow" />
                <span className="absolute -top-2 right-[8%] size-5 rounded-full border-4 border-branco bg-azul-marca shadow" />
              </div>
              <div className="absolute bottom-16 left-[39%] rounded-lg bg-azul-marinho px-3 py-2 text-xs font-bold text-branco shadow-lg">
                Veículo localizado
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-bold text-azul-marinho">
                Acompanhar ônibus
              </h3>
              <p className="mt-3 leading-7 text-texto-suave">
                Pesquise uma linha e visualize onde os veículos estão, o
                sentido da viagem e o horário da última atualização.
              </p>
              <Link
                className="mt-6 inline-flex font-bold text-azul-marca underline decoration-verde-principal decoration-2 underline-offset-4"
                to="/onibus"
              >
                Conhecer monitoramento
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-borda bg-azul-marinho text-branco shadow-sm">
            <div className="h-56 p-6">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-verde-principal">
                Exemplo visual
              </span>
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-white/70">
                    <span>Ocupação estimada</span>
                    <span>Moderada</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-atencao" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <span className="block text-lg font-bold text-verde-principal">
                      Câmera
                    </span>
                    <span className="text-xs text-white/60">Origem</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <span className="block text-lg font-bold text-verde-principal">
                      Python
                    </span>
                    <span className="text-xs text-white/60">Análise</span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 text-center">
                    <span className="block text-lg font-bold text-verde-principal">
                      Web
                    </span>
                    <span className="text-xs text-white/60">Consulta</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 p-7">
              <h3 className="text-2xl font-bold">Lotação inteligente</h3>
              <p className="mt-3 leading-7 text-white/70">
                Entenda o nível de ocupação por meio de uma classificação
                visual, sem depender apenas de números.
              </p>
              <Link
                className="mt-6 inline-flex font-bold text-verde-principal underline decoration-branco/40 decoration-2 underline-offset-4"
                to="/lotacao"
              >
                Conhecer demonstração
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-borda bg-fundo p-6">
          <h3 className="font-bold text-azul-marinho">Níveis de lotação</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {niveisLotacao.map(({ nome, cor, descricao }) => (
              <div className="flex items-start gap-3" key={nome}>
                <span
                  aria-hidden="true"
                  className={`mt-1 size-3 shrink-0 rounded-full ${cor}`}
                />
                <div>
                  <p className="font-bold text-texto">{nome}</p>
                  <p className="mt-1 text-sm leading-5 text-texto-suave">
                    {descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecaoMonitoramento
