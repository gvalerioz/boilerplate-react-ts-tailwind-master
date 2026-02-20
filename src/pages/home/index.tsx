import Navbar from '../../components/Navbar'
import PageCard from '../../components/PageCard'

function Home() {
  return (
    <>

      <Navbar />

      <PageCard
        badge="Início"
        emoji="🏠"
        titulo="Bem-vindo ao Sistema"
        subtitulo="Página inicial · Home"
        texto="Esta é a página inicial do sistema. Aqui você encontrará um resumo geral e acesso rápido a todas as seções disponíveis. Utilize o menu superior para navegar entre as páginas de forma simples e rápida."
      />
    </>
  )
}

export default Home