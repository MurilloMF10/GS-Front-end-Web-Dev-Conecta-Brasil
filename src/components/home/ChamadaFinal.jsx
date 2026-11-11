import { Link } from 'react-router'
import imagemBanner from '../../assets/images/banner-previsibilidade.jpg'

function ChamadaFinal() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-20 text-branco sm:px-6 lg:px-8">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
        src={imagemBanner}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-azul-marinho via-azul-marinho/90 to-preto/45" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
            Informação antes do embarque
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-branco sm:text-5xl">
            Seu trajeto pode começar com mais clareza.
          </h2>
          <p className="mt-4 leading-7 text-white/80">
            Conheça os recursos planejados para acompanhar veículos e consultar
            a ocupação do transporte coletivo.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-verde-principal px-6 py-3 font-bold text-preto transition-colors hover:bg-verde-lima"
            to="/onibus"
          >
            Acompanhar ônibus
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-branco px-6 py-3 font-bold text-branco transition-colors hover:bg-branco hover:text-azul-marinho"
            to="/como-funciona"
          >
            Como funciona
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ChamadaFinal
