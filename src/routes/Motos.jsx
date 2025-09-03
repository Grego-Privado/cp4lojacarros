function Motos() {
   const listaMotos = [
    { id: 1, nome: "Moto", ano: 1, cor: "Cor" },
    { id: 2, nome: "Moto", ano: 1, cor: "Cor" },
    { id: 3, nome: "Moto", ano: 1, cor: "Cor" },
    { id: 4, nome: "Moto", ano: 1, cor: "Cor" },
  ]

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Motos da Zetta</h1>

      <ul className="space-y-4">
        {listaMotos.map((Moto) => (
          <li
            key={Moto.id}
            className="border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{Moto.nome}</h2>
            <p>Ano: {Moto.ano}</p>
            <p>Cor: {Moto.cor}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Motos;