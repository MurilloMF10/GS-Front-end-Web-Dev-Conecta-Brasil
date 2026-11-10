const obterConfiguracao = () => {
  const configuracao = {
    autenticacao:
      import.meta.env.VITE_API_OLHO_VIVO_ENDPOINT_AUTENTICACAO?.trim(),
    buscaLinhas:
      import.meta.env.VITE_API_OLHO_VIVO_ENDPOINT_BUSCA_LINHAS?.trim(),
    posicaoLinha:
      import.meta.env.VITE_API_OLHO_VIVO_ENDPOINT_POSICAO_LINHA?.trim(),
    token: import.meta.env.VITE_API_OLHO_VIVO_TOKEN?.trim(),
    urlBase: import.meta.env.VITE_API_OLHO_VIVO_URL?.trim(),
  }

  const configuracoesAusentes = Object.entries(configuracao)
    .filter(([, valor]) => !valor)
    .map(([chave]) => chave)

  if (configuracoesAusentes.length > 0) {
    throw new Error(
      'A integração com a API Olho Vivo não foi completamente configurada no arquivo .env.',
    )
  }

  return {
    ...configuracao,
    urlBase: configuracao.urlBase.replace(/\/$/, ''),
  }
}

const criarUrl = (urlBase, endpoint, parametros = {}) => {
  const url = new URL(`${urlBase}${endpoint}`)

  Object.entries(parametros).forEach(([chave, valor]) => {
    if (valor !== undefined && valor !== null && valor !== '') {
      url.searchParams.set(chave, valor)
    }
  })

  return url
}

const realizarFetch = async (url, opcoes = {}) => {
  try {
    return await fetch(url, {
      ...opcoes,
      credentials: 'include',
    })
  } catch {
    throw new Error(
      'Não foi possível conectar à API Olho Vivo. Verifique sua conexão e as permissões de acesso do serviço.',
    )
  }
}

let sessaoAutenticada = false
let autenticacaoEmAndamento = null

const executarAutenticacao = async () => {
  const configuracao = obterConfiguracao()
  const url = criarUrl(configuracao.urlBase, configuracao.autenticacao, {
    token: configuracao.token,
  })
  const resposta = await realizarFetch(url, { method: 'POST' })

  if (!resposta.ok) {
    throw new Error(
      `Não foi possível autenticar na API Olho Vivo. Código ${resposta.status}.`,
    )
  }

  const autenticou = await resposta.json()

  if (autenticou !== true) {
    throw new Error('A API Olho Vivo recusou o token informado.')
  }

  sessaoAutenticada = true
  return true
}

export const autenticarOlhoVivo = async () => {
  if (sessaoAutenticada) {
    return true
  }

  if (!autenticacaoEmAndamento) {
    autenticacaoEmAndamento = executarAutenticacao()
  }

  try {
    return await autenticacaoEmAndamento
  } finally {
    autenticacaoEmAndamento = null
  }
}

const requisitarApi = async (endpoint, parametros = {}) => {
  await autenticarOlhoVivo()

  const { urlBase } = obterConfiguracao()
  const url = criarUrl(urlBase, endpoint, parametros)
  const resposta = await realizarFetch(url)

  if (!resposta.ok) {
    if (resposta.status === 401 || resposta.status === 403) {
      sessaoAutenticada = false
    }

    throw new Error(
      `Não foi possível consultar a API Olho Vivo. Código ${resposta.status}.`,
    )
  }

  return resposta.json()
}

const normalizarLinha = (linha) => ({
  circular: Boolean(linha.lc),
  codigo: Number(linha.cl),
  numero: `${linha.lt}-${linha.tl}`,
  sentido: Number(linha.sl),
  terminalPrincipal: linha.tp ?? '',
  terminalSecundario: linha.ts ?? '',
})

const normalizarVeiculo = (veiculo) => ({
  acessivel: Boolean(veiculo.a),
  latitude: Number(veiculo.py),
  longitude: Number(veiculo.px),
  prefixo: String(veiculo.p),
  ultimaAtualizacao: veiculo.ta ?? '',
})

export const buscarLinhas = async (termoBusca) => {
  const { buscaLinhas } = obterConfiguracao()
  const dados = await requisitarApi(buscaLinhas, {
    termosBusca: termoBusca.trim(),
  })

  return Array.isArray(dados) ? dados.map(normalizarLinha) : []
}

export const buscarPosicoesLinha = async (codigoLinha) => {
  const { posicaoLinha } = obterConfiguracao()
  const dados = await requisitarApi(posicaoLinha, { codigoLinha })

  return {
    horarioReferencia: dados.hr ?? '',
    veiculos: Array.isArray(dados.vs)
      ? dados.vs
          .map(normalizarVeiculo)
          .filter(
            (veiculo) =>
              Number.isFinite(veiculo.latitude) &&
              Number.isFinite(veiculo.longitude),
          )
      : [],
  }
}
