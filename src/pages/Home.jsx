import ChamadaFinal from '../components/home/ChamadaFinal.jsx'
import HeroHome from '../components/home/HeroHome.jsx'
import SecaoAvisosRecentes from '../components/home/SecaoAvisosRecentes.jsx'
import SecaoBeneficios from '../components/home/SecaoBeneficios.jsx'
import SecaoComoFunciona from '../components/home/SecaoComoFunciona.jsx'
import SecaoMonitoramento from '../components/home/SecaoMonitoramento.jsx'
import SecaoOds from '../components/home/SecaoOds.jsx'
import SecaoPrivacidade from '../components/home/SecaoPrivacidade.jsx'
import SecaoProblema from '../components/home/SecaoProblema.jsx'

function Home() {
  return (
    <>
      <HeroHome />
      <SecaoProblema />
      <SecaoComoFunciona />
      <SecaoMonitoramento />
      <SecaoBeneficios />
      <SecaoAvisosRecentes />
      <SecaoPrivacidade />
      <SecaoOds />
      <ChamadaFinal />
    </>
  )
}

export default Home
