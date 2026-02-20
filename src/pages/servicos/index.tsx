import Navbar from '../../components/Navbar'
import PageCard from '../../components/PageCard'

function Servicos() {
  return (
    <>
      <Navbar />

      <PageCard
        badge="Serviços"
        emoji="⚙️"
        titulo="Nossos Serviços"
        subtitulo="O que oferecemos · Services"
        texto="Oferecemos desenvolvimento web, design de interfaces e consultoria em tecnologia. Nossa equipe está pronta para transformar sua ideia em realidade com as melhores práticas do mercado e tecnologias modernas."
        corBadge="bg-orange-100 text-orange-700"
      />
    </>
  )
}

export default Servicos