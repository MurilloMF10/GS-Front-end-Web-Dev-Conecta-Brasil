import { Link } from 'react-router'

function ChamadaFinal() {
  return (
    <section className="bg-verde-principal px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-escuro">
            Informação antes do embarque
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-preto sm:text-4xl">
            Seu trajeto pode começar com mais clareza.
          </h2>
          <p className="mt-4 leading-7 text-preto/70">
            Conheça os recursos planejados para acompanhar veículos e consultar
            a ocupação do transporte coletivo.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-azul-marinho px-6 py-3 font-bold text-branco transition-colors hover:bg-azul-marca"
            to="/onibus"
          >
            Acompanhar ônibus
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-preto px-6 py-3 font-bold text-preto transition-colors hover:bg-preto hover:text-branco"
            to="/lotacao"
          >
            Consultar lotação
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ChamadaFinal
