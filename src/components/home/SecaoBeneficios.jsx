import imagemCidade from '../../assets/images/mobilidade-mais-acessivel.jpg'
import imagemOperacao from '../../assets/images/leitura-movimento-operacao.jpg'
import imagemPassageiro from '../../assets/images/pessoas-felizes-onibus-sp.jpg'

const beneficios = [
  {
    publico: 'Para o passageiro',
    titulo: 'Mais previsibilidade',
    descricao:
      'Informações claras ajudam a organizar o horário de saída e reduzir a incerteza no embarque.',
    imagem: imagemPassageiro,
    alt: 'Passageiros embarcando com tranquilidade em um ônibus',
  },
  {
    publico: 'Para a operação',
    titulo: 'Uma leitura do movimento',
    descricao:
      'A ocupação pode apoiar a compreensão de quais veículos e locais concentram mais passageiros.',
    imagem: imagemOperacao,
    alt: 'Equipe de operação acompanhando o movimento do transporte',
  },
  {
    publico: 'Para a cidade',
    titulo: 'Mobilidade mais acessível',
    descricao:
      'Uma experiência informativa amplia o acesso aos dados e valoriza o transporte coletivo.',
    imagem: imagemCidade,
    alt: 'Pessoas com diferentes necessidades utilizando transporte acessível',
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
          {beneficios.map(({ publico, titulo, descricao, imagem, alt }) => (
            <article
              className="overflow-hidden border border-verde-principal/20 bg-branco"
              key={publico}
            >
              <img alt={alt} className="h-52 w-full object-cover" src={imagem} />
              <div className="border-t-4 border-verde-principal p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-azul-marca">
                  {publico}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-azul-marinho">
                  {titulo}
                </h3>
                <p className="mt-3 leading-6 text-texto-suave">{descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoBeneficios
