import { Link } from 'react-router'
import imagemHero from '../../assets/images/hero-onibus.jpg'

function HeroHome() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-azul-marinho text-branco">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]"
        src={imagemHero}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-preto via-preto/80 to-preto/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-preto/70 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-verde-principal/40 bg-preto/45 px-4 py-2 text-sm font-bold text-verde-principal backdrop-blur-sm">
            Mobilidade urbana inteligente
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-branco sm:text-5xl lg:text-6xl">
            Um trajeto mais previsível começa antes da viagem.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Consulte a localização dos ônibus e acompanhe informações de
            lotação para escolher o melhor momento de sair.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-verde-principal px-6 py-3 font-bold text-preto transition-colors hover:bg-verde-lima"
              to="/onibus"
            >
              Ver monitoramento
            </Link>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 bg-preto/20 px-6 py-3 font-bold text-branco backdrop-blur-sm transition-colors hover:border-branco hover:bg-branco/10"
              href="#como-funciona"
            >
              Como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
