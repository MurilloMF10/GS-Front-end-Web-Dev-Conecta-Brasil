function CabecalhoPagina({ etiqueta, titulo, descricao }) {
  return (
    <section className="bg-azul-marinho px-4 py-16 text-branco sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
          {etiqueta}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {titulo}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          {descricao}
        </p>
      </div>
    </section>
  )
}

export default CabecalhoPagina
