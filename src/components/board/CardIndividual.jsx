import React from "react";

export default function CardIndividual({ ready }) {
  return (
    <div className=" m-6 max-w-md bg-white/20 border-2 border-gray-200 rounded-lg shadow">
      {/*Card exterior*/}
      <div className="text-center grid grid-cols-12 p-4 rounded-lg border-b-2 bg-white/30">
        <div className=" col-span-6">
          <p className="font-medium text-white"> Grupo</p>
        </div>
        <div className="col-span-6">
          <p className="text-white font-normal"> cantidad deportista</p>
        </div>
      </div>

      {/*Card interior*/}
      <div className="p-2 grid  grid-cols-12">
        <div className="col-span-6 text-white">lista participantes</div>
        <div className="col-span-6">
          <div className="">
            <table className="text-center">
              <tbody className="text-sm">
                <tr className="">
                  <th
                    scope="row"
                    className=" px-5 rounded-xl font-medium bg-white/20 text-white"
                  >
                    CATEGORÍA
                  </th>
                  <td className="rounded-xl px-6 border-white  bg-white/30 text-white">
                    Nombre 
                  </td>
                </tr>
                <tr className="border-2 border-white">
                  <th className="px-6 rounded-xl font-medium bg-bluePrimary text-white">
                    GRADO
                  </th>
                  <td className="rounded-xl bg-blueSecondary text-white">
                    Nombre del Grado
                  </td>
                </tr>
                <tr className="border-2 border-white">
                  <th
                    scope="row"
                    className="rounded-xl font-medium bg-bluePrimary text-white"
                  >
                    RAMA
                  </th>
                  <td className="rounded-xl bg-blueSecondary text-white">
                    Nombre de la Rama
                  </td>
                </tr>
                <tr className="border-2 border-white">
                  <th
                    scope="row"
                    className="rounded-xl font-medium bg-bluePrimary text-white"
                  >
                    DIVISIÓN 
                  </th>
                  <td className="rounded-xl bg-blueSecondary text-white ">
                    Nombre de la división
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span className="grid grid-cols 12 justify-center">
              {ready ? (
                <div>
                  <button className="col-span-6">Ver sorteo</button>
                  <p className="col-span-6">Sorteado</p>
                </div>
              ) : (
                <button className=" m-4 px-5 py-2 rounded-lg font-medium text-white shadow-lg bg-greenPrimary">
                  Sortear
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
