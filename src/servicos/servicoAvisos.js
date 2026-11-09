const obterUrlApi = () => {
  const urlApi = import.meta.env.VITE_API_AVISOS_URL?.trim()

  if (!urlApi) {
    throw new Error(
      'A variável VITE_API_AVISOS_URL não foi configurada no arquivo .env.',
    )
  }

  return urlApi.replace(/\/$/, '')
}

const normalizarAviso = (aviso) => ({
  id: String(aviso.id),
  titulo: aviso.titulo ?? '',
  descricao: aviso.descricao ?? '',
  categoria: aviso.categoria ?? 'informativo',
  prioridade: aviso.prioridade ?? 'baixa',
  linha: aviso.linha ?? 'Todas as linhas',
  ativo: aviso.ativo === true || aviso.ativo === 'true',
  publicadoEm: aviso.publicadoEm ?? '',
})

const ordenarPorPublicacao = (avisos) =>
  [...avisos].sort((avisoA, avisoB) => {
    const dataA = new Date(avisoA.publicadoEm).getTime() || 0
    const dataB = new Date(avisoB.publicadoEm).getTime() || 0

    return dataB - dataA
  })

const requisitarApi = async (caminho = '', opcoes = {}) => {
  const resposta = await fetch(`${obterUrlApi()}${caminho}`, {
    ...opcoes,
    headers: {
      'Content-Type': 'application/json',
      ...opcoes.headers,
    },
  })

  if (!resposta.ok) {
    throw new Error(
      `Não foi possível concluir a solicitação de avisos. Código ${resposta.status}.`,
    )
  }

  if (resposta.status === 204) {
    return null
  }

  return resposta.json()
}

export const listarAvisos = async ({ somenteAtivos = false } = {}) => {
  const dados = await requisitarApi()
  const avisos = Array.isArray(dados) ? dados.map(normalizarAviso) : []
  const avisosFiltrados = somenteAtivos
    ? avisos.filter((aviso) => aviso.ativo)
    : avisos

  return ordenarPorPublicacao(avisosFiltrados)
}

export const buscarAvisoPorId = async (id) => {
  const aviso = await requisitarApi(`/${id}`)

  return normalizarAviso(aviso)
}

export const criarAviso = async (novoAviso) => {
  const avisoCriado = await requisitarApi('', {
    body: JSON.stringify(novoAviso),
    method: 'POST',
  })

  return normalizarAviso(avisoCriado)
}

export const atualizarAviso = async (id, dadosAtualizados) => {
  const avisoAtualizado = await requisitarApi(`/${id}`, {
    body: JSON.stringify(dadosAtualizados),
    method: 'PUT',
  })

  return normalizarAviso(avisoAtualizado)
}

export const excluirAviso = (id) =>
  requisitarApi(`/${id}`, {
    method: 'DELETE',
  })
