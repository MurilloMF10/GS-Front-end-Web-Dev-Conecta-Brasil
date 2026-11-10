import CartaoAviso from './CartaoAviso.jsx'

function ListaAvisos({ avisos }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {avisos.map((aviso) => (
        <CartaoAviso aviso={aviso} key={aviso.id} />
      ))}
    </div>
  )
}

export default ListaAvisos
