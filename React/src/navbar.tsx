import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {


  return (
    <>
      <h1>Ejercicio React</h1>
        <h2>Selecciona el listado</h2>
        <ul>
          <li><Link to="/list">Listado Github </Link></li>
          <li><Link to="/list-api">Listado Api Rick y Morty</Link></li>
        </ul>
    </>
  );
};
