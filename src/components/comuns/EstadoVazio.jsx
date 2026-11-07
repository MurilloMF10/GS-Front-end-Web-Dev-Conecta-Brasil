function EstadoVazio({
  acao,
  descricao = 'Ainda não existem informações disponíveis para esta consulta.',
  titulo = 'Nenhum resultado encontrado',
}) {
  return (
    <section className="mx-auto my-8 max-w-2xl rounded-2xl border border-borda bg-superficie p-8 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-14 place-items-center rounded-full bg-informacao-claro text-informacao"
      >
        <svg className="size-7" fill="none" viewBox="0 0 24 24">
          <path
            d="M8 11h8M8 15h5M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </span>
      <h2 className="mt-4 text-xl font-bold text-texto">{titulo}</h2>
      <p className="mt-2 leading-6 text-texto-suave">{descricao}</p>
      {acao && <div className="mt-5">{acao}</div>}
    </section>
  )
}

export default EstadoVazio
