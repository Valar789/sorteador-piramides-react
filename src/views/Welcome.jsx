import React from "react";
import Login from "../components/welcome/Login";
import iconhapkido from "../assets/icons/iconhapkido.svg"
import logofederacion from '../assets/logos/logofederacion.png'
import logoqubulowhite from '../assets/logos/logoqubulowhite.png'

export default function Welcome() {
  return (
    <div id="welcome" className="h-screen text-white">
      {/* section left */}
      <div className="fixed right-32 top-80">
          <img className="px-40" src={iconhapkido} alt="" />
          <p className="font-bold text-3xl  max-w-lg">
          Bienvenido al Sorteador de Pirámides de Competencias para Hapkido
         </p>
      </div>
      
    
      {/* section Access */}
      <Login />

      {/* section Logos */}
      <div className="fixed right-96 bottom-48 px-10">
        <p>Un producto de:</p>
        <img className="fixed h-24 m-4"src={logofederacion} alt="" />
      </div>
      <div className="fixed right-52 bottom-48">
        <p>Desarrollado por:</p>
        <img className="fixed h-12 m-4 bottom-20"src={logoqubulowhite} alt="" />
      </div>
      </div>
  );
}
