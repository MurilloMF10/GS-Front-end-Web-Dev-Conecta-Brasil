import { Link } from 'react-router'

const etapas = [
  {
    numero: '01',
    titulo: 'Contagem anônima',
    descricao:
      'As câmeras detectam pessoas no ambiente sem identificar rostos ou indivíduos.',
  },
  {
    numero: '02',
    titulo: 'Processamento da ocupação',
    descricao:
      'O sistema transforma a contagem em uma classificação de lotação fácil de entender.',
  },
  {
    numero: '03',
    titulo: 'Decisão antes de sair',
    descricao:
      'O cidadão consulta as informações e escolhe a opção mais adequada para o trajeto.',
  },
]

function SecaoComoFunciona() {
  return (
    <section
      className="overflow-hidden bg-azul-marinho px-4 py-20 text-branco sm:px-6 lg:px-8 lg:py-28"
      id="como-funciona"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Da câmera até a informação na mão do passageiro.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            O protótipo conecta visão computacional e dados de mobilidade para
            apresentar uma leitura simples da situação do transporte.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {etapas.map(({ numero, titulo, descricao }) => (
            <li
              className="relative rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm"
              key={numero}
            >
              <span className="grid size-12 place-items-center rounded-full bg-verde-principal text-sm font-extrabold text-preto">
                {numero}
              </span>
              <h3 className="mt-6 text-xl font-bold">{titulo}</h3>
              <p className="mt-3 leading-6 text-white/70">{descricao}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-verde-principal/30 bg-verde-principal/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-verde-principal">
              Privacidade desde o início
            </p>
            <p className="mt-1 text-sm leading-6 text-white/70">
              A solução conta pessoas; ela não precisa reconhecer quem está na
              imagem nem armazenar fotografias.
            </p>
          </div>
          <Link
            className="shrink-0 font-bold text-branco underline decoration-verde-principal decoration-2 underline-offset-4"
            to="/como-funciona"
          >
            Entenda a tecnologia
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SecaoComoFunciona
