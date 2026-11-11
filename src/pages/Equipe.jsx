import imagemIsaac from '../assets/images/membro_Isaac.png'
import imagemJoao from '../assets/images/membro_Joao.png'
import imagemMurillo from '../assets/images/membro_Murillo.png'
import imagemThalles from '../assets/images/membro_Thalles.png'
import CabecalhoPagina from '../components/institucionais/CabecalhoPagina.jsx'
import CartaoIntegrante from '../components/institucionais/CartaoIntegrante.jsx'

const integrantes = [
  {
    nome: 'Isaac',
    area: 'Visão computacional e Python',
    descricao:
      'Responsável pelo desenvolvimento principal da funcionalidade em Python, incluindo a lógica de contagem de pessoas e a integração dos cálculos com a aplicação.',
    imagem: imagemIsaac,
  },
  {
    nome: 'Murillo',
    area: 'Front-end e Web Development',
    descricao:
      'Responsável pela arquitetura e implementação da interface web, componentização em React, experiência responsiva e integração visual das funcionalidades.',
    imagem: imagemMurillo,
  },
  {
    nome: 'João',
    area: 'IoT, ESP32 e Node-RED',
    descricao:
      'Responsável pela configuração e funcionamento dos dispositivos ESP32, integração dos módulos e construção dos fluxos de comunicação no Node-RED.',
    imagem: imagemJoao,
  },
  {
    nome: 'Thalles',
    area: 'Documentação e apresentação',
    descricao:
      'Responsável pela organização da documentação do projeto, estruturação da narrativa e produção e apresentação do vídeo pitch.',
    imagem: imagemThalles,
  },
]

function Equipe() {
  return (
    <>
      <CabecalhoPagina
        descricao="Uma solução multidisciplinar construída pela integração entre software, visão computacional, internet das coisas e comunicação."
        etiqueta="Quem constrói o Conecta Brasil"
        titulo="Tecnologias diferentes, um objetivo em comum."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
              Nossa equipe
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-azul-marinho sm:text-4xl">
              Cada integrante conecta uma parte da solução.
            </h2>
            <p className="mt-5 text-lg leading-8 text-texto-suave">
              O projeto reúne competências complementares para transformar uma
              ideia de mobilidade urbana em um protótipo funcional, coerente e
              possível de demonstrar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {integrantes.map((integrante) => (
              <CartaoIntegrante key={integrante.nome} {...integrante} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Equipe
