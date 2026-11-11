import { useState } from 'react'

function AcordeaoFaq({ perguntas }) {
  const [perguntaAberta, setPerguntaAberta] = useState(0)

  const alternarPergunta = (indice) => {
    setPerguntaAberta((indiceAtual) =>
      indiceAtual === indice ? null : indice,
    )
  }

  return (
    <div className="divide-y divide-borda border-y border-borda bg-branco">
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
                className="flex w-full items-center justify-between gap-6 border-l-4 border-transparent px-5 py-6 text-left text-xl font-bold text-azul-marinho transition-colors hover:border-verde-principal hover:bg-fundo sm:px-7"
                id={idBotao}
                onClick={() => alternarPergunta(indice)}
                type="button"
              >
                <span>{pergunta}</span>
                <span
                  aria-hidden="true"
                  className={`bx text-2xl text-verde-escuro ${
                    estaAberta ? 'bx-minus' : 'bx-plus'
                  }`}
                >
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
