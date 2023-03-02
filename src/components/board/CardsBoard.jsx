import React from "react";

export default function CardsBoard() {
  return (
    <div className="m-6 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow">
      <div className="text-center grid grid-cols-12 p-4 rounded-lg bg-bluePrimary">
        <div className=" col-span-6">
          <p className="text-white"> Grupo</p>
        </div>
        <div className="col-span-6">
          <p className="text-white"> cantidad deportista</p>
        </div>
      </div>

      <div>
        <div>lista participantes</div>
        <div>
          <div>Categorias</div>
          <button>Sorteado</button>
          <button>Ver sorteo</button>
        </div>
      </div>
    </div>
  );
}
