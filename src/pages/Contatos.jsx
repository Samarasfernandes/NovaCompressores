import React from "react";
import "./Contatos.css";
import Cardcon from "../components/Cardcon";
import Mapa from "../components/Mapa";

const Contatos = () => {
  return (
    <>
    <section className="contatos">
      <div className="overlay2">
        <h1>CONTATE-NOS</h1>

        <div className="linha">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p>
          Precisa de assistência para seu compressor? Entre em contato conosco
          para suporte, manutenção ou orçamento.
        </p>
      </div>
      
    </section>
    <Cardcon />
       <Mapa />
    </>
   
  );
};

export default Contatos;