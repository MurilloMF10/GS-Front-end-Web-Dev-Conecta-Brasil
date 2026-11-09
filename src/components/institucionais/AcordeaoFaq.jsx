import { useState } from 'react'

function AcordeaoFaq({ perguntas }) {
  const [perguntaAberta, setPerguntaAberta] = useState(0)

  const alternarPergunta = (indice) => {
    setPerguntaAberta((indiceAtual) =>
      indiceAtual === indice ? null : indice,
    )
  }

  return (
    <div className="divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-branco shadow-sm">
      {perguntas.map(({ pergunta, resposta }, indice) => {
        const estaAberta = perguntaAberta === indice
        const idBotao = `pergunta-${indice}`
        const idResposta = `resposta-${indice}`

        return (
          <section key={pergunta}>
            <h2>
              <button
                aria-controls={idResposta}
                aria-expanded={estaAberta}
                className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left text-lg font-bold text-azul-marinho transition-colors hover:bg-fundo sm:px-7"
                id={idBotao}
                onClick={() => alternarPergunta(indice)}
                type="button"
              >
                <span>{pergunta}</span>
                <span
                  aria-hidden="true"
                  className={`grid size-8 shrink-0 place-items-center rounded-full bg-verde-claro text-xl text-verde-escuro transition-transform ${
                    estaAberta ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h2>

            {estaAberta && (
              <div
                aria-labelledby={idBotao}
                className="px-5 pb-6 sm:px-7"
                id={idResposta}
                role="region"
              >
                <p className="max-w-3xl leading-7 text-texto-suave">
                  {resposta}
                </p>
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

export default AcordeaoFaq
