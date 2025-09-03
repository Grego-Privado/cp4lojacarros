
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Carros from "./routes/Carros"
import Home from "./routes/Home"
import Motos from "./routes/Motos"
import Calculadora from "./routes/Calculadora"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        {/* Gerencia a exibição dos componentes com base na URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="*" element={<h2>Página não encontrada</h2>} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

