import React from "react";
import "./Cardcon.css";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Cardcon = () => {
  return (
    <section className="cards-container">
      
      <div className="card">
        <FaHome className="icon" />
        <h3>VISITE-NOS</h3>
        <p>Trabalhamos com manutenção e conserto de compressores, oferecendo um serviço rápido, confiável e de qualidade.</p>
        <span className="info">Rua Neivo Carlos da Silva, 163<br/> Nova Andradina - MS</span>
      </div>

      <div className="card">
        <FaPhone className="icon" />
        <h3>LIGUE PARA NÓS</h3>
        <p>Entre em contato conosco para obter suporte técnico, esclarecer dúvidas ou solicitar um orçamento.</p>
        <span className="info">(67) 99349-8779</span>
      </div>

      <div className="card">
        <FaEnvelope className="icon" />
        <h3>CONTATO</h3>
        <p>Fale conosco por e-mail e receba um atendimento rápido e eficiente para suas necessidades.</p>
        <span className="info">novacompressores@terra.com.br</span>
      </div>

    </section>
  );
};

export default Cardcon;