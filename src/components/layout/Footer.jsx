import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="border-t-4 border-verde-principal bg-azul-marinho text-branco">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            aria-label="Conecta Brasil - página inicial"
            className="text-2xl font-extrabold italic tracking-tight"
            to="/"
          >
            <span className="text-branco">Conecta</span>
            <span className="text-verde-lima">Brasil</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Informação para uma viagem mais tranquila, acessível e previsível.
          </p>
        </div>

        <nav aria-label="Recursos do projeto">
          <h2 className="text-sm font-bold uppercase tracking-wider text-verde-principal">
            Recursos
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link className="transition-colors hover:text-branco" to="/onibus">
                Acompanhar ônibus
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-branco" to="/lotacao">
                Consultar lotação
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-branco" to="/avisos">
                Avisos
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Informações sobre o projeto">
          <h2 className="text-sm font-bold uppercase tracking-wider text-verde-principal">
            Projeto
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link
                className="transition-colors hover:text-branco"
                to="/como-funciona"
              >
                Como funciona
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-branco" to="/faq">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-branco" to="/equipe">
                Equipe
              </Link>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="titulo-ods">
          <h2
            className="text-sm font-bold uppercase tracking-wider text-verde-principal"
            id="titulo-ods"
          >
            ODS conectados
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md border border-white/20 px-3 py-2 text-sm font-bold">
              ODS 9
            </span>
            <span className="rounded-md border border-white/20 px-3 py-2 text-sm font-bold">
              ODS 10
            </span>
            <span className="rounded-md border border-white/20 px-3 py-2 text-sm font-bold">
              ODS 11
            </span>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Conecta Brasil. Projeto acadêmico.</p>
          <p>Desenvolvido para a Global Solution FIAP.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
