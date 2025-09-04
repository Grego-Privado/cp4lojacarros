
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo à CalculadoraZetta</h1>
      <p>Calculadora</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
         <li>
          <Link to="/calculadora">Calculadora</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;




