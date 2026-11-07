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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {desafios.map(({ numero, titulo, descricao }) => (
            <article
              className="rounded-2xl border border-borda bg-superficie p-6 shadow-sm transition-transform hover:-translate-y-1"
              key={numero}
            >
              <span className="text-sm font-extrabold text-verde-escuro">
                {numero}
              </span>
              <h3 className="mt-5 text-xl font-bold text-azul-marinho">
                {titulo}
              </h3>
              <p className="mt-3 leading-6 text-texto-suave">{descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoProblema
