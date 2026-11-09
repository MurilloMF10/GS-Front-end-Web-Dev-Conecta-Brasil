function CartaoIntegrante({ nome, area, descricao, imagem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-borda bg-branco shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-fundo">
        <img
          alt={`Foto de ${nome}`}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          src={imagem}
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-azul-marca">
          {area}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-azul-marinho">
          {nome}
        </h2>
        <p className="mt-4 leading-7 text-texto-suave">{descricao}</p>
      </div>
    </article>
  )
}

export default CartaoIntegrante
