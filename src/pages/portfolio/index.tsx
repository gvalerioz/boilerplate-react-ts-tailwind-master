import Navbar from '../../components/Navbar'
import PageCard from '../../components/PageCard'

function Portfolio() {
    return (
        <>
            <Navbar />

            <PageCard
                badge="Portfólio"
                emoji="🎨"
                titulo="Portfólio"
                subtitulo="Nossos projetos realizados · Portfolio"
                texto="Confira nossa seleção de projetos concluídos com sucesso. De aplicações web corporativas a plataformas de e-commerce, cada trabalho reflete nosso compromisso com design cuidadoso e código limpo e escalável."
                corBadge="bg-orange-100 text-orange-700"
            />
        </>
    )
}

export default Portfolio