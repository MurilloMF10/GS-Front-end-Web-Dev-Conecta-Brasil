import { formatarData } from '../../utilitarios/formatadoresAviso.js'

function ListaVeiculos({ veiculos }) {
  return (
    <section
      aria-labelledby="titulo-veiculos"
      className="rounded-2xl border border-borda bg-branco p-6 shadow-sm"
    >
      <h2 className="text-xl font-extrabold text-azul-marinho" id="titulo-veiculos">
        Veículos localizados
      </h2>
      <p className="mt-2 text-sm text-texto-suave">
        Selecione um marcador no mapa para visualizar sua posição.
      </p>

      <ul className="mt-5 max-h-[25rem] space-y-3 overflow-y-auto pr-1">
        {veiculos.map((veiculo) => (
          <li
            className="rounded-xl border border-borda bg-fundo p-4"
            key={veiculo.prefixo}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-extrabold text-azul-marinho">
                  Ônibus {veiculo.prefixo}
                </p>
                <p className="mt-1 text-sm text-texto-suave">
                  {formatarData(veiculo.ultimaAtualizacao)}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  veiculo.acessivel
                    ? 'bg-verde-claro text-verde-escuro'
                    : 'bg-gray-200 text-texto-suave'
                }`}
              >
                {veiculo.acessivel ? 'Acessível' : 'Não informado'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListaVeiculos
