function EstadoVazio({
  acao,
  descricao = 'Ainda não existem informações disponíveis para esta consulta.',
  icone = 'bx-file-find',
  titulo = 'Nenhum resultado encontrado',
}) {
  return (
    <section className="mx-auto my-8 max-w-2xl rounded-md border border-borda bg-superficie p-8 text-center">
      <span
        aria-hidden="true"
        className="mx-auto grid size-14 place-items-center rounded-md bg-informacao-claro text-informacao"
      >
        <i className={`bx ${icone} text-3xl`} />
      </span>
      <h2 className="mt-4 text-xl font-bold text-texto">{titulo}</h2>
      <p className="mt-2 leading-6 text-texto-suave">{descricao}</p>
      {acao && <div className="mt-5">{acao}</div>}
    </section>
  )
}

export default EstadoVazio
