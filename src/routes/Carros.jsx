const Carros = () => {
  // Exemplo de lista de carros
  const listaCarros = [
    { id: 1, nome: "Carro", ano: 1, cor: "Cor" },
    { id: 2, nome: "Carro", ano: 1, cor: "Cor" },
    { id: 3, nome: "Carro", ano: 1, cor: "Cor" },
    { id: 4, nome: "Carro", ano: 1, cor: "Cor" },
  ]

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Carros da Zetta</h1>

      <ul className="space-y-4">
        {listaCarros.map((carro) => (
          <li
            key={carro.id}
            className="border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{carro.nome}</h2>
            <p>Ano: {carro.ano}</p>
            <p>Cor: {carro.cor}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Carros