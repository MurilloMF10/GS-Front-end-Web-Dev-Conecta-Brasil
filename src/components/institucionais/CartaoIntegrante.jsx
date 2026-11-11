function CartaoIntegrante({ nome, area, descricao, imagem }) {
  return (
    <article className="group overflow-hidden rounded-md border border-borda bg-branco">
      <div className="aspect-square overflow-hidden bg-fundo">
        <img
          alt={`Foto de ${nome}`}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          src={imagem}
        />
      </div>
      <div className="border-t-4 border-verde-principal p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-azul-marca">
          {area}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-azul-marinho">
          {nome}
        </h2>
        <p className="mt-3 text-sm leading-6 text-texto-suave">{descricao}</p>
      </div>
    </article>
  )
}

export default CartaoIntegrante
