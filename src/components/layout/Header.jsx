import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-12 p-4 bg-bluePrimary  text-white">
        <div className=" bg-redPrimary  flex flex-col">
          <h1 className="text-lg md:text-3xl lg:text-4xl">Sorteador</h1>
          <h2 className="text-lg">Pirámides de competencia</h2>
        </div>
        {/* NavBar Condicionado */}
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
