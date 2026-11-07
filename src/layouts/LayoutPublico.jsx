import { Outlet } from 'react-router'
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'

function LayoutPublico() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo">
      <a
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-azul-marinho px-4 py-3 font-bold text-branco transition-transform focus:translate-y-0"
        href="#conteudo-principal"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main className="flex-1" id="conteudo-principal" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPublico
