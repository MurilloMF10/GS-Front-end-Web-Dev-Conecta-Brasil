import {
  formatarData,
  humanizarTexto,
} from '../../utilitarios/formatadoresAviso.js'

const estilosPrioridade = {
  alta: 'border-perigo/25 bg-red-50 text-perigo',
  media: 'border-atencao/40 bg-amber-50 text-amber-800',
  baixa: 'border-informacao/25 bg-informacao-claro text-azul-marca',
}

function CartaoAviso({ aviso }) {
  const prioridade = aviso.prioridade?.toLowerCase() ?? 'baixa'
  const estiloPrioridade =
    estilosPrioridade[prioridade] ?? estilosPrioridade.baixa

  return (
    <article className="grid rounded-md border border-borda bg-branco md:grid-cols-[1fr_15rem]">
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-verde-claro px-3 py-1 text-xs font-bold text-verde-escuro">
            {humanizarTexto(aviso.categoria)}
          </span>
          <span className={`border px-3 py-1 text-xs font-bold ${estiloPrioridade}`}>
            Prioridade {humanizarTexto(prioridade).toLowerCase()}
          </span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-azul-marinho">
          {aviso.titulo}
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-texto-suave">
          {aviso.descricao}
        </p>
      </div>

      <div className="border-t border-borda bg-fundo p-6 text-sm text-texto-suave md:border-l md:border-t-0">
        <p>
          <span className="font-bold text-texto">Linha:</span> {aviso.linha}
        </p>
        <p className="mt-2">
          <span className="font-bold text-texto">Publicado em:</span>{' '}
          <time dateTime={aviso.publicadoEm}>
            {formatarData(aviso.publicadoEm)}
          </time>
        </p>
      </div>
    </article>
  )
}

export default CartaoAviso
