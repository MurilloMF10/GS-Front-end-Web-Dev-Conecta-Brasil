import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Botao from '../components/comuns/Botao.jsx'
import EstadoCarregamento from '../components/comuns/EstadoCarregamento.jsx'
import EstadoVazio from '../components/comuns/EstadoVazio.jsx'
import MensagemErro from '../components/comuns/MensagemErro.jsx'
import CartaoAvisoAdministrativo from '../components/painel/CartaoAvisoAdministrativo.jsx'
import ConfirmacaoExclusao from '../components/painel/ConfirmacaoExclusao.jsx'
import FormularioAviso from '../components/painel/FormularioAviso.jsx'
import useAutenticacao from '../hooks/useAutenticacao.js'
import useGerenciamentoAvisos from '../hooks/useGerenciamentoAvisos.js'

function PainelAdministrativo() {
  const { sair, usuario } = useAutenticacao()
  const navegar = useNavigate()
  const [formularioAberto, setFormularioAberto] = useState(false)
  const [avisoEmEdicao, setAvisoEmEdicao] = useState(null)
  const [avisoParaExcluir, setAvisoParaExcluir] = useState(null)
  const [versaoFormulario, setVersaoFormulario] = useState(0)
  const {
    alternarStatus,
    avisos,
    carregando,
    erroCarregamento,
    identificadorProcessando,
    notificacao,
    recarregar,
    removerAviso,
    salvarAviso,
  } = useGerenciamentoAvisos()

  const totalAtivos = avisos.filter((aviso) => aviso.ativo).length

  const encerrarSessao = () => {
    sair()
    navegar('/login', { replace: true })
  }

  const abrirNovoAviso = () => {
    setAvisoEmEdicao(null)
    setVersaoFormulario((versaoAtual) => versaoAtual + 1)
    setFormularioAberto(true)
  }

  const abrirEdicao = (aviso) => {
    setAvisoEmEdicao(aviso)
    setVersaoFormulario((versaoAtual) => versaoAtual + 1)
    setFormularioAberto(true)
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  const fecharFormulario = () => {
    setFormularioAberto(false)
    setAvisoEmEdicao(null)
  }

  const concluirSalvamento = async (aviso) => {
    const salvou = await salvarAviso(aviso)

    if (salvou) {
      fecharFormulario()
    }
  }

  const confirmarExclusao = async () => {
    const excluiu = await removerAviso(avisoParaExcluir)

    if (excluiu) {
      setAvisoParaExcluir(null)
    }
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 rounded-2xl bg-azul-marinho p-7 text-branco sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-verde-principal">
              Área protegida
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Painel administrativo
            </h1>
            <p className="mt-3 text-white/70">
              Sessão iniciada como {usuario?.email}.
            </p>
          </div>

          <Botao onClick={encerrarSessao} variante="perigo">
            Encerrar sessão
          </Botao>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-borda bg-branco p-5 shadow-sm">
            <p className="text-sm font-bold text-texto-suave">Total de avisos</p>
            <p className="mt-2 text-3xl font-extrabold text-azul-marinho">
              {avisos.length}
            </p>
          </div>
          <div className="rounded-2xl border border-borda bg-branco p-5 shadow-sm">
            <p className="text-sm font-bold text-texto-suave">Avisos ativos</p>
            <p className="mt-2 text-3xl font-extrabold text-verde-escuro">
              {totalAtivos}
            </p>
          </div>
          <div className="rounded-2xl border border-borda bg-branco p-5 shadow-sm">
            <p className="text-sm font-bold text-texto-suave">Avisos inativos</p>
            <p className="mt-2 text-3xl font-extrabold text-texto-suave">
              {avisos.length - totalAtivos}
            </p>
          </div>
        </div>

        {notificacao && (
          <p
            aria-live={notificacao.tipo === 'erro' ? 'assertive' : 'polite'}
            className={`mt-8 rounded-xl border p-4 font-semibold ${
              notificacao.tipo === 'erro'
                ? 'border-perigo/25 bg-red-50 text-perigo'
                : 'border-sucesso/25 bg-green-50 text-verde-escuro'
            }`}
            role={notificacao.tipo === 'erro' ? 'alert' : 'status'}
          >
            {notificacao.mensagem}
          </p>
        )}

        {formularioAberto && (
          <div className="mt-8">
            <FormularioAviso
              aviso={avisoEmEdicao}
              aoCancelar={fecharFormulario}
              aoSalvar={concluirSalvamento}
              key={`${avisoEmEdicao?.id ?? 'novo'}-${versaoFormulario}`}
              salvando={identificadorProcessando === 'formulario'}
            />
          </div>
        )}

        <section aria-labelledby="titulo-gerenciamento" className="mt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
                Gerenciamento
              </p>
              <h2
                className="mt-2 text-3xl font-extrabold text-azul-marinho"
                id="titulo-gerenciamento"
              >
                Avisos cadastrados
              </h2>
            </div>

            <Botao onClick={abrirNovoAviso}>Criar novo aviso</Botao>
          </div>

          <div className="mt-8">
            {carregando && (
              <EstadoCarregamento mensagem="Carregando avisos cadastrados..." />
            )}

            {!carregando && erroCarregamento && (
              <MensagemErro
                aoTentarNovamente={recarregar}
                mensagem={erroCarregamento}
                titulo="Não foi possível carregar o painel"
              />
            )}

            {!carregando && !erroCarregamento && avisos.length === 0 && (
              <EstadoVazio
                acao={<Botao onClick={abrirNovoAviso}>Cadastrar aviso</Botao>}
                descricao="Crie o primeiro comunicado para começar a informar os passageiros."
                titulo="Nenhum aviso cadastrado"
              />
            )}

            {!carregando && !erroCarregamento && avisos.length > 0 && (
              <div className="grid gap-6 lg:grid-cols-2">
                {avisos.map((aviso) => (
                  <CartaoAvisoAdministrativo
                    aviso={aviso}
                    aoAlternarStatus={alternarStatus}
                    aoEditar={abrirEdicao}
                    aoExcluir={setAvisoParaExcluir}
                    identificadorProcessando={identificadorProcessando}
                    key={aviso.id}
                  />
                ))}
              </div>
            )}
          </div>

          <Link
            className="mt-8 inline-flex font-bold text-azul-marca underline decoration-2 underline-offset-4"
            to="/avisos"
          >
            Visualizar avisos públicos
          </Link>
        </section>
      </div>

      <ConfirmacaoExclusao
        aviso={avisoParaExcluir}
        aoCancelar={() => setAvisoParaExcluir(null)}
        aoConfirmar={confirmarExclusao}
        excluindo={
          identificadorProcessando === `exclusao-${avisoParaExcluir?.id}`
        }
      />
    </section>
  )
}

export default PainelAdministrativo
