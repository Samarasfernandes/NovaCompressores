import React from "react";
import "./Mapa.css";

const Mapa = () => {
  return (
    <div className="mapa-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0337384061227!2d-53.36852202493142!3d-22.27671177970355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948e7cde5032de95%3A0x9fac7b48d2ac2093!2sNova%20Compressores!5e0!3m2!1spt-BR!2sbr!4v1776617748083!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa"
      ></iframe>
    </div>
  );
};

export default Mapa;