import { useCallback, useEffect, useState } from 'react'
import {
  atualizarAviso,
  criarAviso,
  excluirAviso,
  listarAvisos,
} from '../servicos/servicoAvisos.js'

const obterMensagemErro = (erro) =>
  erro instanceof Error
    ? erro.message
    : 'Não foi possível concluir a operação solicitada.'

const prepararDados = (aviso) => ({
  ativo: aviso.ativo,
  categoria: aviso.categoria,
  descricao: aviso.descricao,
  linha: aviso.linha,
  prioridade: aviso.prioridade,
  publicadoEm: aviso.publicadoEm,
  titulo: aviso.titulo,
})

function useGerenciamentoAvisos() {
  const [avisos, setAvisos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erroCarregamento, setErroCarregamento] = useState('')
  const [identificadorProcessando, setIdentificadorProcessando] = useState('')
  const [notificacao, setNotificacao] = useState(null)

  const sincronizarAvisos = async () => {
    const avisosAtualizados = await listarAvisos()
    setAvisos(avisosAtualizados)
  }

  const recarregar = useCallback(async () => {
    setCarregando(true)
    setErroCarregamento('')

    try {
      await sincronizarAvisos()
    } catch (erro) {
      setErroCarregamento(obterMensagemErro(erro))
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => {
    let consultaAtiva = true

    listarAvisos()
      .then((avisosRecebidos) => {
        if (consultaAtiva) {
          setAvisos(avisosRecebidos)
        }
      })
      .catch((erro) => {
        if (consultaAtiva) {
          setErroCarregamento(obterMensagemErro(erro))
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
  }, [])

  const salvarAviso = async (aviso) => {
    setIdentificadorProcessando('formulario')
    setNotificacao(null)

    try {
      if (aviso.id) {
        await atualizarAviso(aviso.id, prepararDados(aviso))
      } else {
        await criarAviso(prepararDados(aviso))
      }

      await sincronizarAvisos()
      setNotificacao({
        mensagem: aviso.id
          ? 'Aviso atualizado com sucesso.'
          : 'Aviso criado com sucesso.',
        tipo: 'sucesso',
      })
      return true
    } catch (erro) {
      setNotificacao({ mensagem: obterMensagemErro(erro), tipo: 'erro' })
      return false
    } finally {
      setIdentificadorProcessando('')
    }
  }

  const alternarStatus = async (aviso) => {
    setIdentificadorProcessando(`status-${aviso.id}`)
    setNotificacao(null)

    try {
      await atualizarAviso(aviso.id, prepararDados({
        ...aviso,
        ativo: !aviso.ativo,
      }))
      await sincronizarAvisos()
      setNotificacao({
        mensagem: aviso.ativo
          ? 'Aviso desativado com sucesso.'
          : 'Aviso ativado com sucesso.',
        tipo: 'sucesso',
      })
      return true
    } catch (erro) {
      setNotificacao({ mensagem: obterMensagemErro(erro), tipo: 'erro' })
      return false
    } finally {
      setIdentificadorProcessando('')
    }
  }

  const removerAviso = async (aviso) => {
    setIdentificadorProcessando(`exclusao-${aviso.id}`)
    setNotificacao(null)

    try {
      await excluirAviso(aviso.id)
      await sincronizarAvisos()
      setNotificacao({
        mensagem: 'Aviso excluído com sucesso.',
        tipo: 'sucesso',
      })
      return true
    } catch (erro) {
      setNotificacao({ mensagem: obterMensagemErro(erro), tipo: 'erro' })
      return false
    } finally {
      setIdentificadorProcessando('')
    }
  }

  return {
    alternarStatus,
    avisos,
    carregando,
    erroCarregamento,
    identificadorProcessando,
    notificacao,
    recarregar,
    removerAviso,
    salvarAviso,
  }
}

export default useGerenciamentoAvisos
