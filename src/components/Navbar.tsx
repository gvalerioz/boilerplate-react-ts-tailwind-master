
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const linkAtivo   = "bg-yellow-400 text-[#1e2a4a] font-bold px-4 py-1.6  rounded-full text-sm"
  const linkInativo = "text-slate-300 hover:text-white px-3 py-1.5 text-sm transition-colors"

  const fecharMenu = () => setMenuAberto(false)

  return (
    <nav className="bg-[#1e2a4a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <NavLink to="/" className="font-bold text-white text-xl tracking-tight" onClick={fecharMenu}>
          Sistema<span className="text-yellow-400">.</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-1 list-none">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Início</NavLink></li>
          <li><NavLink to="/sobre"     className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Sobre</NavLink></li>
          <li><NavLink to="/servicos"  className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Serviços</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Portfólio</NavLink></li>
          <li><NavLink to="/contato"   className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Contato</NavLink></li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuAberto(!menuAberto)}
        >
        
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {menuAberto && (
        <ul className="md:hidden bg-[#1e2a4a] border-t border-slate-700 px-6 py-4 flex flex-col gap-2 list-none">
          <li><NavLink to="/" end        onClick={fecharMenu} className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Início</NavLink></li>
          <li><NavLink to="/sobre"       onClick={fecharMenu} className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Sobre</NavLink></li>
          <li><NavLink to="/servicos"    onClick={fecharMenu} className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Serviços</NavLink></li>
          <li><NavLink to="/portfolio"   onClick={fecharMenu} className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Portfólio</NavLink></li>
          <li><NavLink to="/contato"     onClick={fecharMenu} className={({ isActive }) => isActive ? linkAtivo : linkInativo}>Contato</NavLink></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar