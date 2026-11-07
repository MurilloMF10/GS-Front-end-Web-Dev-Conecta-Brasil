import { Link } from 'react-router'

function PaginaNaoEncontrada() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-6 py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-azul-marca">
          Erro 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-azul-marinho sm:text-6xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-texto-suave sm:text-lg">
          O endereço informado não existe ou pode ter sido alterado.
        </p>
        <Link
          className="mt-8 inline-flex rounded-lg bg-verde-principal px-6 py-3 font-bold text-preto transition-colors hover:bg-verde-lima"
          to="/"
        >
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}

export default PaginaNaoEncontrada
