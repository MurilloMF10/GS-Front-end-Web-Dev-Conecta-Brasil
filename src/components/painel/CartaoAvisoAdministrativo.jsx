import Botao from '../comuns/Botao.jsx'
import {
  formatarData,
  humanizarTexto,
} from '../../utilitarios/formatadoresAviso.js'

function CartaoAvisoAdministrativo({
  aviso,
  aoAlternarStatus,
  aoEditar,
  aoExcluir,
  identificadorProcessando,
}) {
  const alterandoStatus = identificadorProcessando === `status-${aviso.id}`
  const algumaOperacaoEmAndamento = Boolean(identificadorProcessando)

  return (
    <article className="rounded-2xl border border-borda bg-branco p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-verde-claro px-3 py-1 text-xs font-bold text-verde-escuro">
            {humanizarTexto(aviso.categoria)}
          </span>
          <span className="rounded-full bg-fundo px-3 py-1 text-xs font-bold text-texto-suave">
            Prioridade {humanizarTexto(aviso.prioridade).toLowerCase()}
          </span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            aviso.ativo
              ? 'bg-green-100 text-verde-escuro'
              : 'bg-gray-200 text-texto-suave'
          }`}
        >
          {aviso.ativo ? 'Ativo' : 'Inativo'}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-extrabold text-azul-marinho">
        {aviso.titulo}
      </h2>
      <p className="mt-3 line-clamp-3 leading-7 text-texto-suave">
        {aviso.descricao}
      </p>

      <dl className="mt-5 grid gap-2 border-t border-borda pt-4 text-sm">
        <div className="flex gap-2">
          <dt className="font-bold text-texto">Linha:</dt>
          <dd className="text-texto-suave">{aviso.linha}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-bold text-texto">Publicação:</dt>
          <dd className="text-texto-suave">
            <time dateTime={aviso.publicadoEm}>
              {formatarData(aviso.publicadoEm)}
            </time>
          </dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Botao
          disabled={algumaOperacaoEmAndamento}
          onClick={() => aoEditar(aviso)}
          tamanho="pequeno"
          variante="secundario"
        >
          Editar
        </Botao>
        <Botao
          carregando={alterandoStatus}
          disabled={algumaOperacaoEmAndamento && !alterandoStatus}
          onClick={() => aoAlternarStatus(aviso)}
          tamanho="pequeno"
          textoCarregando="Alterando..."
          variante="secundario"
        >
          {aviso.ativo ? 'Desativar' : 'Ativar'}
        </Botao>
        <Botao
          disabled={algumaOperacaoEmAndamento}
          onClick={() => aoExcluir(aviso)}
          tamanho="pequeno"
          variante="perigo"
        >
          Excluir
        </Botao>
      </div>
    </article>
  )
}

export default CartaoAvisoAdministrativo
