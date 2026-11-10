import Botao from '../comuns/Botao.jsx'

function ConfirmacaoExclusao({ aviso, aoCancelar, aoConfirmar, excluindo }) {
  if (!aviso) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-preto/60 p-4"
      role="presentation"
    >
      <section
        aria-describedby="descricao-exclusao"
        aria-labelledby="titulo-exclusao"
        aria-modal="true"
        className="w-full max-w-lg rounded-2xl bg-branco p-7 shadow-2xl"
        role="alertdialog"
      >
        <span className="grid size-12 place-items-center rounded-full bg-red-50 text-2xl font-bold text-perigo">
          !
        </span>
        <h2
          className="mt-5 text-2xl font-extrabold text-azul-marinho"
          id="titulo-exclusao"
        >
          Excluir aviso?
        </h2>
        <p className="mt-3 leading-7 text-texto-suave" id="descricao-exclusao">
          O aviso <strong>“{aviso.titulo}”</strong> será removido permanentemente.
          Essa ação não poderá ser desfeita.
        </p>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Botao disabled={excluindo} onClick={aoCancelar} variante="secundario">
            Cancelar
          </Botao>
          <Botao
            carregando={excluindo}
            onClick={aoConfirmar}
            textoCarregando="Excluindo..."
            variante="perigo"
          >
            Confirmar exclusão
          </Botao>
        </div>
      </section>
    </div>
  )
}

export default ConfirmacaoExclusao
