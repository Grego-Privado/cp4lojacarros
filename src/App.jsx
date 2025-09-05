
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Error from './routes/Error';
import Home from './routes/Home';
import Nav from './components/Nav';
import Calculadora from './routes/Calculadora';
import Footer from "./components/Footer"


function App() {
  
  return (
    // Habilita a navegação por rotas na aplicação
    <BrowserRouter>
    {/* Chamando o componente Nav */}
    <Nav/>
     <main>
      {/* Gerencia a exibição dos componentes com base na URL */}
      <Routes>
        {/* Rota para chamar o Error */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar o Home */}
        <Route path="/" element={<Home/>}/>

        <Route path='/calculadora' element={<Calculadora/>}/>

        <Route path='/footer' element={<Footer/>}/>

       </Routes>
    </main>
    {/* Chamando o componente Footer */}
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App