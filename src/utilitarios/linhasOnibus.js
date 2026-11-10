export const obterTrajetoLinha = (linha) => {
  if (!linha) {
    return { destino: '', origem: '' }
  }

  if (linha.sentido === 2) {
    return {
      destino: linha.terminalPrincipal,
      origem: linha.terminalSecundario,
    }
  }

  return {
    destino: linha.terminalSecundario,
    origem: linha.terminalPrincipal,
  }
}

export const descreverSentido = (linha) => {
  const { destino, origem } = obterTrajetoLinha(linha)

  return `${origem} → ${destino}`
}
