import {
  formatarData,
  humanizarTexto,
} from '../../utilitarios/formatadoresAviso.js'

const estilosPrioridade = {
  alta: 'border-perigo/25 bg-red-50 text-perigo',
  media: 'border-atencao/40 bg-amber-50 text-amber-800',
  baixa: 'border-informacao/25 bg-informacao-claro text-azul-marca',
}

const estilosBorda = {
  alta: 'border-l-perigo',
  media: 'border-l-atencao',
  baixa: 'border-l-informacao',
}

function CartaoAviso({ aviso }) {
  const prioridade = aviso.prioridade?.toLowerCase() ?? 'baixa'
  const estiloPrioridade =
    estilosPrioridade[prioridade] ?? estilosPrioridade.baixa
  const estiloBorda = estilosBorda[prioridade] ?? estilosBorda.baixa

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-l-4 border-borda bg-branco p-6 shadow-sm ${estiloBorda}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-verde-claro px-3 py-1 text-xs font-bold text-verde-escuro">
          {humanizarTexto(aviso.categoria)}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${estiloPrioridade}`}
        >
          Prioridade {humanizarTexto(prioridade).toLowerCase()}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-extrabold text-azul-marinho">
        {aviso.titulo}
      </h2>
      <p className="mt-3 grow leading-7 text-texto-suave">
        {aviso.descricao}
      </p>

      <div className="mt-6 border-t border-borda pt-4 text-sm text-texto-suave">
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
