import { descreverSentido } from '../../utilitarios/linhasOnibus.js'

function ListaLinhas({ aoSelecionar, linhaSelecionada, linhas }) {
  return (
    <section aria-labelledby="titulo-resultados-linhas" className="mt-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
            Resultados
          </p>
          <h2
            className="mt-2 text-2xl font-extrabold text-azul-marinho"
            id="titulo-resultados-linhas"
          >
            Selecione o sentido da linha
          </h2>
        </div>
        <p className="text-sm text-texto-suave">
          {linhas.length} {linhas.length === 1 ? 'opção' : 'opções'}
        </p>
      </div>

      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {linhas.map((linha) => {
          const estaSelecionada = linhaSelecionada?.codigo === linha.codigo

          return (
            <li key={linha.codigo}>
              <button
                aria-pressed={estaSelecionada}
                className={`h-full w-full rounded-xl border p-5 text-left transition-colors ${
                  estaSelecionada
                    ? 'border-azul-marca bg-informacao-claro'
                    : 'border-borda bg-branco hover:border-azul-marca'
                }`}
                onClick={() => aoSelecionar(linha)}
                type="button"
              >
                <span className="text-xl font-extrabold text-azul-marinho">
                  Linha {linha.numero}
                </span>
                <span className="mt-2 block leading-6 text-texto-suave">
                  {descreverSentido(linha)}
                </span>
                <span className="mt-3 block text-sm font-bold text-azul-marca">
                  Sentido {linha.sentido}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ListaLinhas
