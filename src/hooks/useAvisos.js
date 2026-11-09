import { useCallback, useEffect, useState } from 'react'
import { listarAvisos } from '../servicos/servicoAvisos.js'

function useAvisos({ somenteAtivos = false } = {}) {
  const [avisos, setAvisos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  const carregarAvisos = useCallback(async () => {
    setCarregando(true)
    setErro('')

    try {
      const avisosRecebidos = await listarAvisos({ somenteAtivos })
      setAvisos(avisosRecebidos)
    } catch (erroDaRequisicao) {
      setAvisos([])
      setErro(
        erroDaRequisicao instanceof Error
          ? erroDaRequisicao.message
          : 'Não foi possível carregar os avisos.',
      )
    } finally {
      setCarregando(false)
    }
  }, [somenteAtivos])

  useEffect(() => {
    let consultaAtiva = true

    listarAvisos({ somenteAtivos })
      .then((avisosRecebidos) => {
        if (consultaAtiva) {
          setAvisos(avisosRecebidos)
        }
      })
      .catch((erroDaRequisicao) => {
        if (consultaAtiva) {
          setAvisos([])
          setErro(
            erroDaRequisicao instanceof Error
              ? erroDaRequisicao.message
              : 'Não foi possível carregar os avisos.',
          )
        }
      })
      .finally(() => {
        if (consultaAtiva) {
          setCarregando(false)
        }
      })

    return () => {
      consultaAtiva = false
    }
  }, [somenteAtivos])

  return {
    avisos,
    carregando,
    erro,
    recarregar: carregarAvisos,
  }
}

export default useAvisos
