import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Sobre from './pages/sobre/index'
import Servicos from './pages/servicos/index'
import Portfolio from './pages/portfolio/index'
import Contato from './pages/Contato/index'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App