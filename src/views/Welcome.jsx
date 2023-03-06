import React from "react";
import Login from "../components/welcome/Login";
import iconhapkido from "../assets/icons/iconhapkido.svg"
import logofederacion from '../assets/logos/logofederacion.png'
import logoqubulowhite from '../assets/logos/logoqubulowhite.png'

export default function Welcome() {
  return (
    <div id="welcome" className="h-screen text-white">
      {/* section left */}
      <div className="fixed right-32 top-40">
          <img className="px-40" src={iconhapkido} alt="" />
          <p className="font-bold text-2xl  max-w-md">
          Bienvenido al Sorteador de Pirámides de Competencias para Hapkido
         </p>
      </div>
      
    
      {/* section Access */}
      <Login />

      {/* section Logos */}
      <div className="fixed right-96 bottom-32 px-10">
        <p className="text-sm">Un producto de:</p>
        <img className="fixed h-20 m-4"src={logofederacion} alt="" />
      </div>
      <div className="fixed right-52 bottom-32">
        <p className="text-sm">Desarrollado por:</p>
        <img className="fixed h-10 m-4 bottom-9"src={logoqubulowhite} alt="" />
      </div>
      </div>
  );
}
