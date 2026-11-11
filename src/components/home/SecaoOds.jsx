import imagemOds9 from '../../assets/images/ods-9.jpg'
import imagemOds10 from '../../assets/images/ods-10.webp'
import imagemOds11 from '../../assets/images/ods-11.jpg'

const objetivos = [
  {
    numero: '9',
    nome: 'Indústria, inovação e infraestrutura',
    contribuicao:
      'Aplica dados e visão computacional para modernizar a experiência no transporte coletivo.',
    imagem: imagemOds9,
  },
  {
    numero: '10',
    nome: 'Redução das desigualdades',
    contribuicao:
      'Torna informações de lotação e acessibilidade mais próximas de diferentes passageiros.',
    imagem: imagemOds10,
  },
  {
    numero: '11',
    nome: 'Cidades e comunidades sustentáveis',
    contribuicao:
      'Contribui para um transporte público mais informado, acessível e conectado à rotina urbana.',
    imagem: imagemOds11,
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
          {objetivos.map(({ numero, nome, contribuicao, imagem }) => (
            <article
              className="grid overflow-hidden border border-borda bg-branco sm:grid-cols-[10rem_1fr] lg:block"
              key={numero}
            >
              <img
                alt={`Símbolo do ODS ${numero}: ${nome}`}
                className="min-h-40 w-full object-cover lg:aspect-square"
                src={imagem}
              />
              <div className="border-t-4 border-verde-principal p-6">
                <h3 className="text-2xl font-bold leading-6 text-azul-marinho">
                  {nome}
                </h3>
                <p className="mt-3 leading-7 text-texto-suave">{contribuicao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoOds
