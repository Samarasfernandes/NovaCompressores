import './Home.css';
import Bts from "./Bts";

export default function Home() {
  return (
    <section className="home">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dh7xegwu2/video/upload/v1769608493/Vhome_oim7ic.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay">
        <h1 className="TituloP">
          Especialista em Conserto, Manutenção e<br />
          Desempenho de Compressores em Geral.
        </h1>
      </div>

      <Bts />
    </section>
  );
}
