function EstadoCarregamento({ mensagem = 'Carregando informações...' }) {
  return (
    <div
      aria-live="polite"
      className="flex min-h-48 flex-col items-center justify-center gap-4 px-6 py-12 text-center"
      role="status"
    >
      <span
        aria-hidden="true"
        className="size-10 animate-spin rounded-full border-4 border-borda border-t-azul-marca"
      />
      <p className="font-semibold text-texto-suave">{mensagem}</p>
    </div>
  )
}

export default EstadoCarregamento
