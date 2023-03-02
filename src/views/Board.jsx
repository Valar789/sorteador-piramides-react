import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";
import BreadCrumb from "../components/layout/BreadCrumb";
import NavBar from "../components/layout/NavBar";

export default function Board() {
  return (
    <div>
          <>
      <header className="p-4 bg-bluePrimary  text-white">
          <h1 className="text-lg md:text-3xl lg:text-4xl">Sorteador</h1>
          <h2 className="text-lg">Pirámides de competencia</h2>
        {/* NavBar Condicionado}
        {/* <NavBar /> */}
      </header>
      <div className="flex place-content-center bg-blueSecondary">
        <div className="w-96 w- lg:w-80 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-80 h-2 bg-blue"></div>
        <div className="w-96 lg:w-80 h-2 bg-red"></div>
      </div>
    </>
 
      <div>
        <BreadCrumb /> <p>2 de 18 grupos sorteados</p>
      </div>
      <FilterCategories />
      <CardsBoard />
    </div>
  );
}
