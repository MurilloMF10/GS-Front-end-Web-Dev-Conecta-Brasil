class ErroIntegracao extends Error {
  constructor(mensagem, status = 500) {
    super(mensagem)
    this.name = 'ErroIntegracao'
    this.status = status
  }
}

const responderJson = (dados, status = 200) =>
  Response.json(dados, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })

const criarUrlApi = (urlBase, endpoint, parametros = {}) => {
  const baseNormalizada = urlBase.replace(/\/$/, '')
  const endpointNormalizado = endpoint.replace(/^\//, '')
  const url = new URL(`${baseNormalizada}/${endpointNormalizado}`)

  Object.entries(parametros).forEach(([chave, valor]) => {
    if (valor !== undefined && valor !== null && valor !== '') {
      url.searchParams.set(chave, valor)
    }
  })

  return url
}

const obterConfiguracao = () => {
  const configuracao = {
    autenticacao:
      process.env.VITE_API_OLHO_VIVO_ENDPOINT_AUTENTICACAO?.trim(),
    buscaLinhas:
      process.env.VITE_API_OLHO_VIVO_ENDPOINT_BUSCA_LINHAS?.trim(),
    posicaoLinha:
      process.env.VITE_API_OLHO_VIVO_ENDPOINT_POSICAO_LINHA?.trim(),
    token: process.env.OLHO_VIVO_TOKEN?.trim(),
    urlBase: process.env.OLHO_VIVO_URL?.trim(),
  }

  const configuracoesAusentes = Object.entries(configuracao)
    .filter(([, valor]) => !valor)
    .map(([chave]) => chave)

  if (configuracoesAusentes.length > 0) {
    throw new ErroIntegracao(
      'A integração com a API Olho Vivo não foi configurada no servidor.',
    )
  }

  return configuracao
}

const extrairCookieSessao = (cabecalhos) => {
  const cookies =
    typeof cabecalhos.getSetCookie === 'function'
      ? cabecalhos.getSetCookie()
      : [cabecalhos.get('set-cookie')].filter(Boolean)

  return cookies
    .map((cookie) => cookie.split(';', 1)[0])
    .filter(Boolean)
    .join('; ')
}

const autenticar = async (configuracao) => {
  const url = criarUrlApi(
    configuracao.urlBase,
    configuracao.autenticacao,
    { token: configuracao.token },
  )
  const resposta = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json' },
  })

  if (!resposta.ok) {
    throw new ErroIntegracao(
      `A API Olho Vivo recusou a autenticação. Código ${resposta.status}.`,
      502,
    )
  }

  const autenticou = await resposta.json()
  const cookieSessao = extrairCookieSessao(resposta.headers)

  if (autenticou !== true || !cookieSessao) {
    throw new ErroIntegracao(
      'A API Olho Vivo não forneceu uma sessão válida.',
      502,
    )
  }

  return cookieSessao
}

const obterConsulta = (url, configuracao) => {
  const operacao = url.searchParams.get('operacao')

  if (operacao === 'buscarLinhas') {
    const termosBusca = url.searchParams.get('termosBusca')?.trim() ?? ''

    if (termosBusca.length < 2 || termosBusca.length > 100) {
      throw new ErroIntegracao(
        'Informe entre 2 e 100 caracteres para pesquisar uma linha.',
        400,
      )
    }

    return {
      endpoint: configuracao.buscaLinhas,
      parametros: { termosBusca },
    }
  }

  if (operacao === 'posicaoLinha') {
    const codigoLinha = url.searchParams.get('codigoLinha')?.trim() ?? ''

    if (!/^\d+$/.test(codigoLinha)) {
      throw new ErroIntegracao('O código da linha informado é inválido.', 400)
    }

    return {
      endpoint: configuracao.posicaoLinha,
      parametros: { codigoLinha },
    }
  }

  throw new ErroIntegracao('Operação da API Olho Vivo não permitida.', 400)
}

export async function GET(request) {
  try {
    const configuracao = obterConfiguracao()
    const consulta = obterConsulta(new URL(request.url), configuracao)
    const cookieSessao = await autenticar(configuracao)
    const urlConsulta = criarUrlApi(
      configuracao.urlBase,
      consulta.endpoint,
      consulta.parametros,
    )
    const resposta = await fetch(urlConsulta, {
      headers: {
        Accept: 'application/json',
        Cookie: cookieSessao,
      },
    })

    if (!resposta.ok) {
      throw new ErroIntegracao(
        `A consulta à API Olho Vivo falhou. Código ${resposta.status}.`,
        502,
      )
    }

    return responderJson(await resposta.json())
  } catch (erro) {
    if (erro instanceof ErroIntegracao) {
      return responderJson({ mensagem: erro.message }, erro.status)
    }

    console.error('Falha inesperada na integração com a API Olho Vivo.')
    return responderJson(
      { mensagem: 'Não foi possível consultar a API Olho Vivo.' },
      500,
    )
  }
}
