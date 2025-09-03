
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo à ZettaCarros</h1>
      <p>Escolha uma opção abaixo.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/carros">Ver Carros</Link>
        </li>
        <li>
          <Link to="/motos">Ver Motos</Link>
        </li>
        <li>
          <Link to="/calculadora">Calculadora</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;