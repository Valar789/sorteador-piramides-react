import React from "react";


export default function Header() {
  // const Condicionado = () => {
  //   //investigar el path o la ruta en la aplicación está 

  // }
  return (
    <>
      <header className="p-4 bg-bluePrimary  text-white">
          <h1 className="text-lg md:text-3xl lg:text-4xl">Sorteador</h1>
          <h2 className="text-lg">Pirámides de competencia</h2>
        {/* {NavBar Condicionado} */}
        {/* <NavBar /> */}
      </header>
      <div className="flex place-content-center bg-blueSecondary">
        <div className="w-96 w- lg:w-80 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-80 h-2 bg-blue"></div>
        <div className="w-96 lg:w-80 h-2 bg-red"></div>
      </div>
    </>
  );
}
