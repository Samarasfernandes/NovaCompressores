import "./Duvidas.css";

const Duvidas = () => {
  return (
    <section className="duvidas">
      <div className="duvidas-overlay">
        <h2>Entre em contato conosco</h2>

        <p>
          Em caso de dúvidas, entre em contato conosco e fale com um dos nossos
          especialistas. Temos uma equipe pronta para te atender e orientar da
          melhor forma possível.
        </p>
<div className="what">
       <a
        href="https://wa.me/556793498779"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        Fale com um especialista
      </a>
      </div>
      </div>
      
    </section>
  );
};

export default Duvidas;
