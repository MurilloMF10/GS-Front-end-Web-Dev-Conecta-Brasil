import { useEffect } from 'react'
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { formatarData } from '../../utilitarios/formatadoresAviso.js'

const CENTRO_SAO_PAULO = [-23.5505, -46.6333]

function AjustarLimites({ veiculos }) {
  const mapa = useMap()

  useEffect(() => {
    if (veiculos.length === 0) {
      return
    }

    const coordenadas = veiculos.map((veiculo) => [
      veiculo.latitude,
      veiculo.longitude,
    ])

    mapa.fitBounds(coordenadas, {
      maxZoom: 15,
      padding: [40, 40],
    })
  }, [mapa, veiculos])

  return null
}

function MapaOnibus({ linha, veiculos }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-borda bg-branco shadow-sm">
      <MapContainer
        center={CENTRO_SAO_PAULO}
        className="h-[32rem] w-full"
        scrollWheelZoom
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {veiculos.map((veiculo) => (
          <CircleMarker
            center={[veiculo.latitude, veiculo.longitude]}
            fillColor="#74cf23"
            fillOpacity={0.9}
            key={veiculo.prefixo}
            pathOptions={{ color: '#102a43', weight: 3 }}
            radius={10}
          >
            <Popup>
              <div className="min-w-44">
                <strong>Ônibus {veiculo.prefixo}</strong>
                <br />
                Linha {linha.numero}
                <br />
                {veiculo.acessivel
                  ? 'Veículo acessível'
                  : 'Acessibilidade não informada'}
                <br />
                Atualização: {formatarData(veiculo.ultimaAtualizacao)}
              </div>
            </Popup>
          </CircleMarker>
        ))}

        <AjustarLimites veiculos={veiculos} />
      </MapContainer>
    </div>
  )
}

export default MapaOnibus
