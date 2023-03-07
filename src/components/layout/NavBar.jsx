import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="col-span-8 flex justify-end  px-7 gap-10 items-center">
      <div><Link to="/home">Cargar nuevo listado</Link></div>
      <div><Link to="/board">Ver plantillas de pirámides</Link></div>
    </nav>
  );
}
