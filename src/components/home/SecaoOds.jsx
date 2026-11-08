const objetivos = [
  {
    numero: '9',
    nome: 'Indústria, inovação e infraestrutura',
    contribuicao:
      'Aplica dados e visão computacional para modernizar a experiência no transporte coletivo.',
    cor: 'bg-[#fd6925]',
  },
  {
    numero: '10',
    nome: 'Redução das desigualdades',
    contribuicao:
      'Torna informações de lotação e acessibilidade mais próximas de diferentes passageiros.',
    cor: 'bg-[#dd1367]',
  },
  {
    numero: '11',
    nome: 'Cidades e comunidades sustentáveis',
    contribuicao:
      'Contribui para um transporte público mais informado, acessível e conectado à rotina urbana.',
    cor: 'bg-[#fd9d24]',
  },
]

function SecaoOds() {
  return (
    <section className="bg-fundo px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
              Agenda 2030
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
              Conexão com os Objetivos de Desenvolvimento Sustentável.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-texto-suave sm:text-lg">
            A proposta está conectada principalmente ao ODS 11 e também apoia
            inovação em infraestrutura e acesso mais igualitário à informação.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {objetivos.map(({ numero, nome, contribuicao, cor }) => (
            <article
              className="overflow-hidden rounded-2xl bg-branco shadow-sm"
              key={numero}
            >
              <div className={`${cor} p-5 text-branco`}>
                <span className="text-5xl font-extrabold">{numero}</span>
                <h3 className="mt-3 text-lg font-bold leading-6">{nome}</h3>
              </div>
              <p className="p-6 leading-7 text-texto-suave">{contribuicao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoOds
