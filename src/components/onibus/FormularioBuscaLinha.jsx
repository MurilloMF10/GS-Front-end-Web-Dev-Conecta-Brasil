import { useState } from 'react'
import Botao from '../comuns/Botao.jsx'

function FormularioBuscaLinha({ aoPesquisar, carregando }) {
  const [termoBusca, setTermoBusca] = useState('')

  const enviarFormulario = (evento) => {
    evento.preventDefault()
    aoPesquisar(termoBusca)
  }

  return (
    <form
      className="rounded-2xl border border-borda bg-branco p-6 shadow-sm sm:p-8"
      onSubmit={enviarFormulario}
      role="search"
    >
      <label className="text-lg font-bold text-azul-marinho" htmlFor="linha">
        Qual linha você deseja acompanhar?
      </label>
      <p className="mt-2 text-sm leading-6 text-texto-suave">
        Pesquise pelo número da linha ou pelo nome de um dos terminais.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          autoComplete="off"
          className="min-h-12 grow rounded-lg border border-borda bg-branco px-4 text-texto placeholder:text-texto-suave focus:border-azul-marca"
          id="linha"
          minLength="2"
          onChange={(evento) => setTermoBusca(evento.target.value)}
          placeholder="Ex.: 8000, Lapa ou Ramos"
          required
          type="search"
          value={termoBusca}
        />
        <Botao
          carregando={carregando}
          className="sm:min-w-36"
          textoCarregando="Buscando..."
          type="submit"
        >
          Buscar linha
        </Botao>
      </div>
    </form>
  )
}

export default FormularioBuscaLinha
