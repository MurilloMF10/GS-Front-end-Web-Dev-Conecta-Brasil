import { useCallback, useState } from 'react'
import {
  buscarLinhas,
  buscarPosicoesLinha,
} from '../servicos/servicoOlhoVivo.js'

const obterMensagemErro = (erro) =>
  erro instanceof Error
    ? erro.message
    : 'Não foi possível concluir a consulta dos ônibus.'

function useMonitoramentoOnibus() {
  const [linhas, setLinhas] = useState([])
  const [linhaSelecionada, setLinhaSelecionada] = useState(null)
  const [veiculos, setVeiculos] = useState([])
  const [horarioReferencia, setHorarioReferencia] = useState('')
  const [carregandoLinhas, setCarregandoLinhas] = useState(false)
  const [carregandoPosicoes, setCarregandoPosicoes] = useState(false)
  const [erro, setErro] = useState('')

  const pesquisarLinhas = useCallback(async (termoBusca) => {
    const termoNormalizado = termoBusca.trim()

    if (termoNormalizado.length < 2) {
      setErro('Digite pelo menos dois caracteres para pesquisar uma linha.')
      setLinhas([])
      return false
    }

    setCarregandoLinhas(true)
    setErro('')
    setLinhaSelecionada(null)
    setVeiculos([])
    setHorarioReferencia('')

    try {
      const linhasEncontradas = await buscarLinhas(termoNormalizado)
      setLinhas(linhasEncontradas)
      return true
    } catch (erroDaConsulta) {
      setLinhas([])
      setErro(obterMensagemErro(erroDaConsulta))
      return false
    } finally {
      setCarregandoLinhas(false)
    }
  }, [])

  const consultarPosicoes = useCallback(async (linha) => {
    if (!linha) {
      return false
    }

    setCarregandoPosicoes(true)
    setErro('')

    try {
      const resultado = await buscarPosicoesLinha(linha.codigo)
      setLinhaSelecionada(linha)
      setVeiculos(resultado.veiculos)
      setHorarioReferencia(resultado.horarioReferencia)
      return true
    } catch (erroDaConsulta) {
      setVeiculos([])
      setHorarioReferencia('')
      setErro(obterMensagemErro(erroDaConsulta))
      return false
    } finally {
      setCarregandoPosicoes(false)
    }
  }, [])

  const limparConsulta = useCallback(() => {
    setErro('')
    setHorarioReferencia('')
    setLinhas([])
    setLinhaSelecionada(null)
    setVeiculos([])
  }, [])

  return {
    carregandoLinhas,
    carregandoPosicoes,
    consultarPosicoes,
    erro,
    horarioReferencia,
    linhaSelecionada,
    linhas,
    limparConsulta,
    pesquisarLinhas,
    veiculos,
  }
}

export default useMonitoramentoOnibus
