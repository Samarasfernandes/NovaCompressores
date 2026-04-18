import "./Servico.css";

const servicos = [
  {
    id: 1,
    titulo: "Manutenção de macaco Hidraulicos",
    icon: "/Icones/1.png",
  },
  {
    id: 2,
    titulo: "Serviço de Calderarias e Combois",
    icon: "/Icones/3.png",
  },
  {
    id: 3,
    titulo: "Manutenção de propulsoras de Graxa",
    icon: "/Icones/1.png",
  },
  {
    id: 4,
    titulo: "Serviço de Caminhoes Oficina",
    icon: "/Icones/4.png",
  },
  {
    id: 5,
    titulo: "Lavadora de alta pressão",
    icon: "/Icones/2.png",
  },
];

export default function Servico() {
  return (
    <section className="servico">
      <div className="separador"></div>

      <div className="titulo_servico">
        <h1>Serviços</h1>
      </div>

      <div className="grid-servicos">
        {servicos.map((item) => (
          <div className="item" key={item.id}>
            <div className="icon">
              <img src={item.icon} alt={item.titulo} />
            </div>
            <p>
              {item.titulo.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
