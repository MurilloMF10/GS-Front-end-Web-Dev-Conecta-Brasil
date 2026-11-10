import { useState } from 'react'
import Botao from '../comuns/Botao.jsx'
import { formatarDataParaCampo } from '../../utilitarios/formatadoresAviso.js'

const categorias = [
  { valor: 'operacao', texto: 'Operação' },
  { valor: 'manutencao', texto: 'Manutenção' },
  { valor: 'transito', texto: 'Trânsito' },
  { valor: 'acessibilidade', texto: 'Acessibilidade' },
  { valor: 'informativo', texto: 'Informativo' },
]

const prioridades = [
  { valor: 'baixa', texto: 'Baixa' },
  { valor: 'media', texto: 'Média' },
  { valor: 'alta', texto: 'Alta' },
]

const criarEstadoInicial = (aviso) => ({
  ativo: aviso?.ativo ?? true,
  categoria: aviso?.categoria ?? 'informativo',
  descricao: aviso?.descricao ?? '',
  id: aviso?.id,
  linha: aviso?.linha ?? 'Todas as linhas',
  prioridade: aviso?.prioridade ?? 'baixa',
  publicadoEm: formatarDataParaCampo(aviso?.publicadoEm),
  titulo: aviso?.titulo ?? '',
})

function FormularioAviso({ aviso, aoCancelar, aoSalvar, salvando }) {
  const [dados, setDados] = useState(() => criarEstadoInicial(aviso))

  const alterarCampo = (evento) => {
    const { checked, name, type, value } = evento.target

    setDados((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const enviarFormulario = async (evento) => {
    evento.preventDefault()

    await aoSalvar({
      ...dados,
      publicadoEm: new Date(dados.publicadoEm).toISOString(),
    })
  }

  return (
    <form
      className="rounded-2xl border border-borda bg-branco p-6 shadow-sm sm:p-8"
      onSubmit={enviarFormulario}
    >
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-azul-marca">
          {dados.id ? 'Editar comunicado' : 'Novo comunicado'}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-azul-marinho">
          {dados.id ? 'Atualize as informações do aviso' : 'Cadastre um aviso'}
        </h2>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="font-bold text-texto" htmlFor="titulo">
            Título
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-lg border border-borda px-4"
            id="titulo"
            maxLength="100"
            name="titulo"
            onChange={alterarCampo}
            required
            value={dados.titulo}
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-bold text-texto" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            className="mt-2 min-h-32 w-full resize-y rounded-lg border border-borda p-4"
            id="descricao"
            maxLength="500"
            name="descricao"
            onChange={alterarCampo}
            required
            value={dados.descricao}
          />
        </div>

        <div>
          <label className="font-bold text-texto" htmlFor="categoria">
            Categoria
          </label>
          <select
            className="mt-2 min-h-12 w-full rounded-lg border border-borda bg-branco px-4"
            id="categoria"
            name="categoria"
            onChange={alterarCampo}
            value={dados.categoria}
          >
            {categorias.map((categoria) => (
              <option key={categoria.valor} value={categoria.valor}>
                {categoria.texto}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-bold text-texto" htmlFor="prioridade">
            Prioridade
          </label>
          <select
            className="mt-2 min-h-12 w-full rounded-lg border border-borda bg-branco px-4"
            id="prioridade"
            name="prioridade"
            onChange={alterarCampo}
            value={dados.prioridade}
          >
            {prioridades.map((prioridade) => (
              <option key={prioridade.valor} value={prioridade.valor}>
                {prioridade.texto}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-bold text-texto" htmlFor="linha">
            Linha afetada
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-lg border border-borda px-4"
            id="linha"
            maxLength="50"
            name="linha"
            onChange={alterarCampo}
            required
            value={dados.linha}
          />
        </div>

        <div>
          <label className="font-bold text-texto" htmlFor="publicadoEm">
            Data de publicação
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-lg border border-borda px-4"
            id="publicadoEm"
            name="publicadoEm"
            onChange={alterarCampo}
            required
            type="datetime-local"
            value={dados.publicadoEm}
          />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl bg-fundo p-4 font-semibold text-texto">
        <input
          checked={dados.ativo}
          className="size-5 accent-verde-principal"
          name="ativo"
          onChange={alterarCampo}
          type="checkbox"
        />
        Publicar este aviso na área pública
      </label>

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Botao disabled={salvando} onClick={aoCancelar} variante="secundario">
          Cancelar
        </Botao>
        <Botao
          carregando={salvando}
          textoCarregando="Salvando..."
          type="submit"
        >
          {dados.id ? 'Salvar alterações' : 'Criar aviso'}
        </Botao>
      </div>
    </form>
  )
}

export default FormularioAviso
