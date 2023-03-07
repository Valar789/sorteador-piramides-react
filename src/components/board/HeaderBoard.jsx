import React from "react";
import NavBar from "../layout/NavBar";

export default function HeaderBoard() {
  return (
    <div className="flex justify-between  mb-12">
      {/* Section Title and menu header*/}
      <div>
        <h2 className="text-2xl font-bold ">
          Grupos de competidores
        </h2>
        <span className="flex justify-end font-bold ">
          2 de 18 grupos sorteados
        </span>
      </div>
      <div className="text-right">
        <NavBar/>
      </div>
    </div>
  );
}
