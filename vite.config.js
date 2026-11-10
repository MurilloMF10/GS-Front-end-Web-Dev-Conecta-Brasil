import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const CAMINHO_PROXY = '/api/olho-vivo'

const criarConfiguracaoProxy = (variaveisAmbiente) => ({
  [CAMINHO_PROXY]: {
    changeOrigin: true,
    cookieDomainRewrite: '',
    rewrite: (caminho) => {
      const caminhoApi = caminho.replace(CAMINHO_PROXY, '')
      const endpointAutenticacao =
        variaveisAmbiente.VITE_API_OLHO_VIVO_ENDPOINT_AUTENTICACAO

      if (caminhoApi.startsWith(endpointAutenticacao)) {
        const separador = caminhoApi.includes('?') ? '&' : '?'

        return `${caminhoApi}${separador}token=${encodeURIComponent(
          variaveisAmbiente.OLHO_VIVO_TOKEN,
        )}`
      }

      return caminhoApi
    },
    secure: true,
    target: variaveisAmbiente.OLHO_VIVO_URL,
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const variaveisAmbiente = loadEnv(mode, '.', '')
  const proxy = criarConfiguracaoProxy(variaveisAmbiente)

  return {
    plugins: [react(), tailwindcss()],
    preview: { proxy },
    server: { proxy },
  }
})
