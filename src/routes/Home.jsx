
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-center text-white p-6">
      
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Bem-vindo à CalculadoraZetta
      </h1>

      {/* Descrição */}
      <p className="text-lg md:text-xl mb-8 max-w-lg">
        Uma calculadora feita para seus cálculos do dia a dia.  
        Clique no botão abaixo e experimente!
      </p>

      {/* Botão de Acesso */}
      <Link to="/calculadora">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 animate-bounce">
          Acessar Calculadora
        </button>
      </Link>

      {/* Rodapé simples */}
      <footer className="mt-12 text-sm opacity-80">
        © 2025 CalculadoraZetta - Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Home;
