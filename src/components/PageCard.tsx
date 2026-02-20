type PageCardProps = {
  badge: string
  emoji: string
  titulo: string
  subtitulo: string
  texto: string
  corBadge?: string
}

function PageCard({ badge, emoji, titulo, subtitulo, texto, corBadge }: PageCardProps) {
  return (

    <main className="bg-[#f0f2f5] min-h-[calc(100vh-56px)] flex items-center justify-center p-8">

    
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg overflow-hidden">

        <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-[#1e2a4a]" />

        <div className="p-8">

          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${corBadge || 'bg-orange-100 text-orange-700'}`}>
            {badge}
          </span>

          <p className="text-5xl mt-5 mb-3">{emoji}</p>

          <h1 className="text-2xl font-bold text-[#1e2a4a] font-serif mb-1">
            {titulo}
          </h1>

          <p className="text-slate-400 text-sm mb-5">{subtitulo}</p>

          <hr className="border-slate-100 mb-5" />

          <p className="text-slate-500 leading-relaxed text-sm">{texto}</p>

        </div>
      </div>
    </main>
  )
}

export default PageCard