import CartaoAviso from './CartaoAviso.jsx'

function ListaAvisos({ avisos }) {
  return (
    <div className="grid gap-5">
      {avisos.map((aviso) => (
        <CartaoAviso aviso={aviso} key={aviso.id} />
      ))}
    </div>
  )
}

export default ListaAvisos
