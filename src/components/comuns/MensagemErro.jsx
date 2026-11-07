import Botao from './Botao.jsx'

function MensagemErro({
  aoTentarNovamente,
  mensagem = 'Não foi possível carregar as informações. Tente novamente em alguns instantes.',
  titulo = 'Algo deu errado',
}) {
  return (
    <section
      className="mx-auto my-8 max-w-2xl rounded-2xl border border-perigo/25 bg-red-50 p-6 text-center"
      role="alert"
    >
      <span
        aria-hidden="true"
        className="mx-auto grid size-12 place-items-center rounded-full bg-perigo/10 text-2xl font-bold text-perigo"
      >
        !
      </span>
      <h2 className="mt-4 text-xl font-bold text-texto">{titulo}</h2>
      <p className="mt-2 leading-6 text-texto-suave">{mensagem}</p>
      {aoTentarNovamente && (
        <Botao className="mt-5" onClick={aoTentarNovamente} variante="secundario">
          Tentar novamente
        </Botao>
      )}
    </section>
  )
}

export default MensagemErro
