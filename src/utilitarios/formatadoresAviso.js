export const humanizarTexto = (texto) => {
  if (!texto) {
    return 'Não informado'
  }

  const textoFormatado = texto.replaceAll('_', ' ').replaceAll('-', ' ')

  return textoFormatado.charAt(0).toUpperCase() + textoFormatado.slice(1)
}

export const formatarData = (data) => {
  const dataConvertida = new Date(data)

  if (Number.isNaN(dataConvertida.getTime())) {
    return 'Data não informada'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(dataConvertida)
}

export const formatarDataParaCampo = (data) => {
  const dataConvertida = data ? new Date(data) : new Date()

  if (Number.isNaN(dataConvertida.getTime())) {
    return ''
  }

  const diferencaFuso = dataConvertida.getTimezoneOffset() * 60_000

  return new Date(dataConvertida.getTime() - diferencaFuso)
    .toISOString()
    .slice(0, 16)
}
