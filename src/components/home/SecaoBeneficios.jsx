const beneficios = [
  {
    publico: 'Para o passageiro',
    titulo: 'Mais previsibilidade',
    descricao:
      'Informações claras ajudam a organizar o horário de saída e reduzir a incerteza no embarque.',
  },
  {
    publico: 'Para a operação',
    titulo: 'Uma leitura do movimento',
    descricao:
      'A ocupação pode apoiar a compreensão de quais veículos e locais concentram mais passageiros.',
  },
  {
    publico: 'Para a cidade',
    titulo: 'Mobilidade mais acessível',
    descricao:
      'Uma experiência informativa amplia o acesso aos dados e valoriza o transporte coletivo.',
  },
]

function SecaoBeneficios() {
  return (
    <section className="bg-verde-claro px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-escuro">
            Benefícios
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
            Uma mesma informação pode ajudar pessoas e melhorar decisões.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {beneficios.map(({ publico, titulo, descricao }, indice) => (
            <article
              className="rounded-2xl bg-branco p-7 shadow-sm"
              key={publico}
            >
              <span className="text-4xl font-extrabold text-verde-principal/40">
                0{indice + 1}
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-azul-marca">
                {publico}
              </p>
              <h3 className="mt-2 text-xl font-bold text-azul-marinho">
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

export default SecaoBeneficios
