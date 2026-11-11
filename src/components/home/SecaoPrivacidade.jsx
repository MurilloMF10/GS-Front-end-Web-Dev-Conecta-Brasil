const compromissos = [
  { icone: 'bx-user-x', texto: 'Contagem de pessoas sem identificação individual.' },
  { icone: 'bx-scan', texto: 'Nenhum reconhecimento facial faz parte da proposta.' },
  { icone: 'bx-image-alt', texto: 'As imagens não precisam ser armazenadas pelo protótipo.' },
  { icone: 'bx-info-circle', texto: 'Resultados apresentados com transparência sobre possíveis limitações.' },
]

function SecaoPrivacidade() {
  return (
    <section className="bg-azul-marinho px-4 py-20 text-branco sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
            Privacidade
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contar pessoas não significa identificar pessoas.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            O objetivo do Conecta Brasil é estimar a ocupação. A solução não
            precisa saber quem está no ônibus ou no terminal para entregar
            informação útil ao cidadão.
          </p>
        </div>

        <ul className="grid gap-3">
          {compromissos.map(({ icone, texto }) => (
            <li
              className="flex gap-4 border-b border-white/15 py-5 first:border-t"
              key={texto}
            >
              <i
                aria-hidden="true"
                className={`bx ${icone} text-3xl text-verde-principal`}
              />
              <span className="leading-7 text-white/80">{texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SecaoPrivacidade
