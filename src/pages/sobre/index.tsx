import Navbar from '../../components/Navbar'
import PageCard from '../../components/PageCard'

function Sobre() {
  return (
    <>
      <Navbar />

      <PageCard
        badge="Sobre"
        emoji="👤"
        titulo="Sobre Nós"
        subtitulo="Conheça nossa história · About"
        texto="Somos uma equipe dedicada a criar soluções inovadoras e eficientes. Fundada em 2020, nossa missão é transformar ideias em produtos digitais de alta qualidade, sempre com foco na experiência do usuário e na excelência técnica."
        corBadge="bg-orange-100 text-orange-700"
      />
    </>
  )
}

export default Sobre