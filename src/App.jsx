import React from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Servico from "./components/Servico";
import Marcas from "./components/Marcas";
import Duvidas from "./components/Duvidas";
import Maquinas from "./components/Maquinas";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
  <>
 <Header />
  <Home />
  <Sobre />
  <Servico />
  <Marcas />
  <Duvidas />
  <Maquinas />
  <Footer />
  </>
  )
}

export default App
