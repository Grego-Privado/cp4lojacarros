import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Título */}
        
        <Link to="/" className="text-2xl font-bold text-white tracking-wide hover:text-yellow-300 transition">
          CalculadoraZetta
        </Link>
        

        {/* Links de Navegação */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-yellow-300 transition">
            Início
          </Link>
          <Link to="/calculadora" className="text-white hover:text-yellow-300 transition">
            Calculadora
          </Link>
        </div>

        {/* Botão estilo mobile futuramente */}
        <button className="md:hidden text-white hover:text-yellow-300">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Nav;
