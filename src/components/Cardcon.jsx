import React from "react";
import "./Cardcon.css";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Cardcon = () => {
  return (
    <section className="cards-container">
      
      <div className="card">
        <FaHome className="icon" />
        <h3>VISITE-NOS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis mollis cuidin arcu non rutrum</p>
        <span className="info">Rua Neivo Carlos da Silva, 163<br/> Nova Andradina - MS</span>
      </div>

      <div className="card">
        <FaPhone className="icon" />
        <h3>LIGUE PARA NÓS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis mollis cuidin arcu non rutrum</p>
        <span className="info">(67) 99349-8779</span>
      </div>

      <div className="card">
        <FaEnvelope className="icon" />
        <h3>CONTATO</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis mollis cuidin arcu non rutrum</p>
        <span className="info">novacompressores@terra.com.br</span>
      </div>

    </section>
  );
};

export default Cardcon;