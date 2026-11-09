import CabecalhoPagina from '../components/institucionais/CabecalhoPagina.jsx'

const etapas = [
  {
    numero: '01',
    titulo: 'Captura no ambiente',
    descricao:
      'Câmeras instaladas nos veículos ou terminais fornecem as imagens usadas para estimar quantas pessoas estão no local.',
  },
  {
    numero: '02',
    titulo: 'Processamento em Python',
    descricao:
      'O protótipo de visão computacional detecta pessoas na imagem e transforma a contagem em um dado de ocupação.',
  },
  {
    numero: '03',
    titulo: 'Integração dos dados',
    descricao:
      'A estimativa de lotação é combinada aos dados de localização e operação disponibilizados pela API Olho Vivo.',
  },
  {
    numero: '04',
    titulo: 'Consulta pelo cidadão',
    descricao:
      'A interface organiza as informações de maneira simples para ajudar o passageiro a planejar melhor o deslocamento.',
  },
]

const compromissos = [
  'A proposta realiza contagem, não reconhecimento facial.',
  'O protótipo não precisa armazenar imagens para exibir a estimativa.',
  'O nível de lotação é apresentado como estimativa, com suas limitações.',
  'A implantação real dependeria de infraestrutura e autorização dos operadores.',
]

function ComoFunciona() {
  return (
    <>
      <CabecalhoPagina
        descricao="Entenda como visão computacional, dados de mobilidade e uma interface acessível podem transformar a lotação em uma informação útil antes do embarque."
        etiqueta="Tecnologia a serviço da mobilidade"
        titulo="Da câmera à decisão do passageiro."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
              Fluxo da solução
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-azul-marinho sm:text-4xl">
              Quatro etapas que trabalham em conjunto
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {etapas.map(({ numero, titulo, descricao }) => (
              <li
                className="rounded-2xl border border-borda bg-branco p-7 shadow-sm"
                key={numero}
              >
                <span className="grid size-12 place-items-center rounded-full bg-verde-principal text-sm font-extrabold text-preto">
                  {numero}
                </span>
                <h3 className="mt-6 text-xl font-bold text-azul-marinho">
                  {titulo}
                </h3>
                <p className="mt-3 leading-7 text-texto-suave">{descricao}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-branco px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-informacao/20 bg-informacao-claro p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-azul-marca">
              Dados de mobilidade
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-azul-marinho">
              Localização pela API Olho Vivo
            </h2>
            <p className="mt-4 leading-7 text-texto-suave">
              A integração com a API da SPTrans será responsável por consultar
              dados como linhas, veículos e posições transmitidas. A
              disponibilidade e a atualização dessas informações dependem do
              serviço externo.
            </p>
          </article>

          <article className="rounded-2xl border border-verde-principal/30 bg-verde-claro p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-verde-escuro">
              Protótipo acadêmico
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-azul-marinho">
              Lotação estimada pela câmera
            </h2>
            <p className="mt-4 leading-7 text-texto-suave">
              Nesta primeira versão, a câmera do computador demonstra a
              contagem de pessoas em Python. O resultado simula como a
              informação poderia chegar ao sistema em uma implantação nos
              ônibus e terminais.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-azul-marinho px-4 py-16 text-branco sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
              Uso responsável
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Transparência e privacidade fazem parte da solução.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              O Conecta Brasil apresenta uma proposta de tecnologia assistiva
              para o planejamento da viagem. Por ser um protótipo, seus
              resultados não substituem informações oficiais da operação.
            </p>
          </div>

          <ul className="grid gap-3">
            {compromissos.map((compromisso) => (
              <li
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                key={compromisso}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-verde-principal font-bold text-preto">
                  ✓
                </span>
                <span className="leading-7 text-white/80">{compromisso}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default ComoFunciona
