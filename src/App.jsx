
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./routes/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        {/* Gerencia a exibição dos componentes com base na URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>Página não encontrada</h2>} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

