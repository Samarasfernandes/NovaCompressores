import './Marcas.css';
import Bts from "./Bts";


const marcas = [
  { id: 1, nome: "Jacto", img: "/Marca/jacto.png" },
  { id: 2, nome: "Lupus", img: "/Marca/lupus.png" },
  { id: 3, nome: "Chiaperini", img: "/Marca/chiaperini.png" },
  { id: 4, nome: "Puma", img: "/Marca/puma.png" },
  { id: 5, nome: "Schulz", img: "/Marca/schulz.png" },
  { id: 6, nome: "Pressure", img: "/Marca/pressure.png" },
  { id: 7, nome: "Fênix do Brasil", img: "/Marca/fenix.png" },
  { id: 8, nome: "Lubefer", img: "/Marca/lubefer.jpeg" },
  { id: 9, nome: "Genebre", img: "/Marca/genebre.png" },
  { id: 10, nome: "Tecfil", img: "/Marca/tecfil.png" },
   { id: 11, nome: "Bremen", img: "/Marca/bremen.png" },
   { id: 12, nome: "Werk", img: "/Marca/werk.png" },
   { id: 13, nome: "Buffalo", img: "/Marca/buffalo.png" },
   { id: 14, nome: "Hidra", img: "/Marca/hidra.png" },
    { id: 15, nome: "Unifort", img: "/Marca/uni.png" },
];


export default function Marcas() {
  return (
    <section className="marcas">
       
      <div className="titulo_marcas">
<h1>Marcas que trabalhamos atualmente</h1>
      </div>
      
       <div className="marcas-grid">
        {marcas.map((marca) => (
          <div className="marca-card" key={marca.id}>
            <img src={marca.img} alt={marca.nome} />
          </div>
        ))}
      </div>


<div className="botao_marca">
 <Bts />
     </div>
    </section>
  );
}
