import EstadoVazio from '../comuns/EstadoVazio.jsx'

function SecaoAvisosRecentes() {
  return (
    <section className="bg-branco px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
            Avisos de operação
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-azul-marinho sm:text-4xl">
            Comunicados importantes também estarão por aqui.
          </h2>
        </div>
        <EstadoVazio
          titulo="Integração em preparação"
          descricao="Os avisos cadastrados pelo painel administrativo serão exibidos nesta área quando a integração com a API estiver concluída."
        />
      </div>
    </section>
  )
}

export default SecaoAvisosRecentes
