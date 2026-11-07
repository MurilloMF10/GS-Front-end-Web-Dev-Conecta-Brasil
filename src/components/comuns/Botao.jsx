const estilosVariantes = {
  primario:
    'bg-verde-principal text-preto hover:bg-verde-lima disabled:bg-borda disabled:text-texto-suave',
  secundario:
    'border border-azul-marca bg-transparent text-azul-marca hover:bg-informacao-claro disabled:border-borda disabled:text-texto-suave',
  perigo:
    'bg-perigo text-branco hover:bg-red-700 disabled:bg-borda disabled:text-texto-suave',
}

const estilosTamanhos = {
  pequeno: 'min-h-9 px-4 py-2 text-sm',
  medio: 'min-h-11 px-5 py-2.5 text-base',
  grande: 'min-h-12 px-6 py-3 text-base',
}

function Botao({
  children,
  className = '',
  carregando = false,
  disabled = false,
  tamanho = 'medio',
  textoCarregando = 'Aguarde...',
  type = 'button',
  variante = 'primario',
  ...propriedades
}) {
  const estaDesabilitado = disabled || carregando
  const estiloVariante = estilosVariantes[variante] ?? estilosVariantes.primario
  const estiloTamanho = estilosTamanhos[tamanho] ?? estilosTamanhos.medio

  return (
    <button
      {...propriedades}
      aria-busy={carregando || undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-azul-marca disabled:cursor-not-allowed ${estiloVariante} ${estiloTamanho} ${className}`}
      disabled={estaDesabilitado}
      type={type}
    >
      {carregando && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}
      {carregando ? textoCarregando : children}
    </button>
  )
}

export default Botao
