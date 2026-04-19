import React from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Servico from "./components/Servico";
import Marcas from "./components/Marcas";
import Duvidas from "./components/Duvidas";
import Maquinas from "./components/Maquinas";
import Footer from "./components/Footer";
import Contatos from './pages/Contatos';
import Cardcon from "./components/Cardcon";
import Mapa from "./components/Mapa";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <Home />
            <Sobre />
            <Servico />
            <Marcas />
            <Duvidas />
            <Maquinas />
          </>
        } />

        {/* Página de contatos */}
        <Route path="/contatos" element={<Contatos />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;