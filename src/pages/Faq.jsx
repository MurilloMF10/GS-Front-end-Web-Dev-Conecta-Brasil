import AcordeaoFaq from '../components/institucionais/AcordeaoFaq.jsx'
import CabecalhoPagina from '../components/institucionais/CabecalhoPagina.jsx'

const perguntas = [
  {
    pergunta: 'O sistema reconhece o rosto das pessoas?',
    resposta:
      'Não. A proposta é detectar e contar pessoas para estimar a ocupação, sem identificar quem aparece na imagem e sem utilizar reconhecimento facial.',
  },
  {
    pergunta: 'Como o nível de lotação é calculado?',
    resposta:
      'O protótipo em Python conta as pessoas detectadas e converte o resultado em uma classificação de ocupação. Em uma aplicação real, os limites seriam ajustados conforme a capacidade de cada veículo ou ambiente.',
  },
  {
    pergunta: 'A localização dos ônibus é exibida em tempo real?',
    resposta:
      'A posição é consultada pela API Olho Vivo, da SPTrans. O site mostrará a última atualização recebida, pois o intervalo e a disponibilidade dos dados dependem do serviço externo e da transmissão de cada veículo.',
  },
  {
    pergunta: 'A estimativa de lotação é sempre exata?',
    resposta:
      'Não. Iluminação, enquadramento, pessoas parcialmente encobertas e qualidade da câmera podem afetar a detecção. Por isso, a informação será apresentada como uma estimativa, e não como uma contagem absoluta.',
  },
  {
    pergunta: 'As imagens capturadas ficam armazenadas?',
    resposta:
      'O protótipo foi pensado para processar a imagem e utilizar apenas o resultado da contagem. Não é necessário armazenar fotografias nem dados que identifiquem os passageiros.',
  },
  {
    pergunta: 'Por que um ônibus pode não aparecer na consulta?',
    resposta:
      'A exibição depende dos dados fornecidos pela API e da transmissão dos veículos. Uma linha ou posição pode ficar temporariamente indisponível sem que isso represente uma falha do site.',
  },
  {
    pergunta: 'Como os avisos de operação serão publicados?',
    resposta:
      'Usuários autorizados acessarão o portal administrativo para cadastrar, editar e remover comunicados. Os avisos ativos serão exibidos na área pública da aplicação.',
  },
  {
    pergunta: 'O Conecta Brasil já funciona em toda a frota?',
    resposta:
      'Ainda não. Esta entrega é um protótipo acadêmico que demonstra a integração entre as partes da solução. Uma implantação real exigiria câmeras, conectividade, autorização e colaboração dos operadores de transporte.',
  },
]

function Faq() {
  return (
    <>
      <CabecalhoPagina
        descricao="Reunimos respostas diretas sobre o monitoramento, a origem dos dados, a privacidade e os limites desta primeira versão do projeto."
        etiqueta="Perguntas frequentes"
        titulo="Informação clara também faz parte da viagem."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
              Tire suas dúvidas
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-azul-marinho">
              Como o protótipo funciona na prática?
            </h2>
            <p className="mt-5 leading-7 text-texto-suave">
              As respostas refletem o escopo atual do projeto acadêmico e
              deixam claro o que já é demonstrado e o que dependeria de uma
              implantação real.
            </p>
          </div>

          <AcordeaoFaq perguntas={perguntas} />
        </div>
      </section>
    </>
  )
}

export default Faq
