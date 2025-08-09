import React, { useState } from 'react';
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";
import "./index.css";


function App() {

  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">

      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Aquí van las películas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>

      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador></Buscador>

        <Crear setListadoState={setListadoState}></Crear>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Curso Programación IV - <a href="https://www.google.com/">google.com</a>
      </footer>

    </div>
  );
}

export default App;
