import imagemEspera from '../../assets/images/esperando-onibus.jpg'
import imagemIdosos from '../../assets/images/idosos-onibus.jpg'

const desafios = [
  {
    numero: '01',
    titulo: 'Incerteza no embarque',
    descricao:
      'Sem saber como o veículo está, o passageiro não consegue planejar o trajeto com tranquilidade.',
  },
  {
    numero: '02',
    titulo: 'Tempo de espera',
    descricao:
      'A falta de informação pode fazer o cidadão esperar sem saber se a próxima opção será adequada.',
  },
  {
    numero: '03',
    titulo: 'Acessibilidade',
    descricao:
      'Veículos lotados dificultam o deslocamento de idosos, gestantes e pessoas com deficiência.',
  },
]

function SecaoProblema() {
  return (
    <section className="bg-fundo px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
              O problema
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
              A lotação muda. Sua rotina não precisa ficar no escuro.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-texto-suave sm:text-lg">
            O Conecta Brasil nasce para reduzir a incerteza de quem depende do
            transporte coletivo. A proposta reúne localização e estimativa de
            ocupação em uma experiência simples para o cidadão.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden border border-borda bg-branco lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid min-h-96 sm:grid-cols-2">
            <figure className="relative min-h-72 overflow-hidden sm:min-h-full">
              <img
                alt="Passageiros aguardando ônibus em um ponto movimentado"
                className="absolute inset-0 size-full object-cover"
                src={imagemEspera}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-preto/90 to-transparent px-6 pb-5 pt-16 text-sm font-bold text-branco">
                Espera sem informação
              </figcaption>
            </figure>
            <figure className="relative min-h-72 overflow-hidden sm:min-h-full">
              <img
                alt="Pessoas idosas utilizando um ônibus urbano"
                className="absolute inset-0 size-full object-cover"
                src={imagemIdosos}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-preto/90 to-transparent px-6 pb-5 pt-16 text-sm font-bold text-branco">
                Conforto e acessibilidade importam
              </figcaption>
            </figure>
          </div>

          <div className="divide-y divide-borda">
            {desafios.map(({ numero, titulo, descricao }) => (
              <article className="p-6" key={numero}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-bold text-verde-principal">
                    {numero}
                  </span>
                  <h3 className="text-2xl font-bold text-azul-marinho">
                    {titulo}
                  </h3>
                </div>
                <p className="mt-2 pl-12 leading-6 text-texto-suave">
                  {descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecaoProblema
