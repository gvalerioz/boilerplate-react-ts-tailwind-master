import Navbar from '../../components/Navbar'
import PageCard from '../../components/PageCard'

function Contato() {
  return (
    <>
      <Navbar />

      <PageCard
        badge="Contato"
        emoji="✉️"
        titulo="Entre em Contato"
        subtitulo="Fale conosco · Contact"
        texto="Tem alguma dúvida ou projeto em mente? Adoraríamos ouvir você. Entre em contato pelo e-mail contato@sistema.dev ou pelas nossas redes sociais. Nossa equipe responde em até 24 horas nos dias úteis."
        corBadge="bg-orange-100 text-orange-700"
      />
    </>
  )
}

export default Contato