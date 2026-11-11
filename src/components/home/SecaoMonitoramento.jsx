import { Link } from 'react-router'
import imagemCamera from '../../assets/images/camera-contagem-passageiros.jpg'
import imagemLocalizacao from '../../assets/images/localizacao-onibus-ao-vivo.png'

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
          <article className="overflow-hidden rounded-md border border-borda bg-fundo">
            <img
              alt="Mapa com a localização de ônibus na cidade de São Paulo"
              className="h-64 w-full object-cover"
              src={imagemLocalizacao}
            />
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

          <article className="overflow-hidden rounded-md border border-borda bg-azul-marinho text-branco">
            <img
              alt="Câmera identificando a quantidade de passageiros no ônibus"
              className="h-64 w-full object-cover"
              src={imagemCamera}
            />
            <div className="border-t border-white/10 p-7">
              <h3 className="text-2xl font-bold">Lotação inteligente</h3>
              <p className="mt-3 leading-7 text-white/70">
                Entenda o nível de ocupação por meio de uma classificação
                visual, sem depender apenas de números.
              </p>
              <Link
                className="mt-6 inline-flex font-bold text-verde-principal underline decoration-branco/40 decoration-2 underline-offset-4"
                to="/como-funciona"
              >
                Entender a proposta
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-10 border border-borda bg-fundo p-6">
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
