import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

const classesLinkDesktop = ({ isActive }) =>
  `border-b-2 px-1 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? 'border-verde-principal text-azul-marca'
      : 'border-transparent text-texto hover:text-azul-marca'
  }`

const classesLinkMobile = ({ isActive }) =>
  `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
    isActive
      ? 'bg-verde-claro text-verde-escuro'
      : 'text-texto hover:bg-fundo hover:text-azul-marca'
  }`

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const fecharComEscape = (evento) => {
      if (evento.key === 'Escape') {
        setMenuAberto(false)
      }
    }

    document.addEventListener('keydown', fecharComEscape)

    return () => document.removeEventListener('keydown', fecharComEscape)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-4 border-verde-principal bg-branco shadow-sm">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Conecta Brasil - página inicial"
          className="shrink-0 text-xl font-extrabold italic tracking-tight sm:text-2xl"
          to="/"
        >
          <span className="text-azul-marca">Conecta</span>
          <span className="text-verde-lima">Brasil</span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 xl:flex"
        >
          <NavLink className={classesLinkDesktop} end to="/">
            Início
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/onibus">
            Acompanhar ônibus
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/lotacao">
            Lotação
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/avisos">
            Avisos
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/como-funciona">
            Como funciona
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/faq">
            FAQ
          </NavLink>
          <NavLink className={classesLinkDesktop} to="/equipe">
            Equipe
          </NavLink>
        </nav>

        <NavLink
          className={({ isActive }) =>
            `hidden rounded-lg px-4 py-2.5 text-sm font-bold transition-colors xl:inline-flex ${
              isActive
                ? 'bg-verde-escuro text-branco'
                : 'bg-verde-principal text-preto hover:bg-verde-lima'
            }`
          }
          to="/login"
        >
          Portal administrativo
        </NavLink>

        <button
          aria-controls="menu-mobile"
          aria-expanded={menuAberto}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-borda text-azul-marinho transition-colors hover:bg-fundo xl:hidden"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          type="button"
        >
          <span className="sr-only">
            {menuAberto ? 'Fechar menu' : 'Abrir menu'}
          </span>
          {menuAberto ? (
            <svg
              aria-hidden="true"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${menuAberto ? 'block' : 'hidden'} border-t border-borda bg-branco xl:hidden`}
        id="menu-mobile"
      >
        <nav
          aria-label="Navegação para dispositivos móveis"
          className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6"
          onClick={() => setMenuAberto(false)}
        >
          <NavLink className={classesLinkMobile} end to="/">
            Início
          </NavLink>
          <NavLink className={classesLinkMobile} to="/onibus">
            Acompanhar ônibus
          </NavLink>
          <NavLink className={classesLinkMobile} to="/lotacao">
            Lotação
          </NavLink>
          <NavLink className={classesLinkMobile} to="/avisos">
            Avisos
          </NavLink>
          <NavLink className={classesLinkMobile} to="/como-funciona">
            Como funciona
          </NavLink>
          <NavLink className={classesLinkMobile} to="/faq">
            FAQ
          </NavLink>
          <NavLink className={classesLinkMobile} to="/equipe">
            Equipe
          </NavLink>
          <NavLink
            className="mt-2 rounded-lg bg-verde-principal px-4 py-3 text-center text-base font-bold text-preto transition-colors hover:bg-verde-lima"
            to="/login"
          >
            Portal administrativo
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
