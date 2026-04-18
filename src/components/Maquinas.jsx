import "./Maquinas.css";

const imagens = [
  "/Maquina/1.png",
  "/Maquina/2.png",
  "/Maquina/3.png",
  "/Maquina/4.png",
  "/Maquina/5.png",
  "/Maquina/6.png",
  "/Maquina/7.png",
  "/Maquina/8.png",
];

export default function Maquinas() {
  return (
    <section className="maquinas">
      <h2>Conheça Nossos Projetos</h2>

      <div className="grid-maquinas">
        {imagens.map((img, index) => (
          <div className="card-maquina" key={index}>
            <img src={img} alt={`Máquina ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
