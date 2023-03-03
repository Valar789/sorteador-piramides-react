import React from "react";

export default function CardsBoard() {
  return (
    <div className="m-6 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow">
      <div className="text-center grid grid-cols-12 p-4 rounded-lg bg-bluePrimary">
        <div className=" col-span-6">
          <p className="font-medium text-white"> Grupo</p>
        </div>
        <div className="col-span-6">
          <p className="text-white"> cantidad deportista</p>
        </div>
      </div>

      <div className="p-2 grid  grid-cols-12">
        <div className="col-span-6">lista participantes</div>
        <div className="col-span-6">
          <div className="m-2">
            <table className="text-center">
              <tbody className="text-sm">
                <tr className="border-2 border-white">
                  <th
                    scope="row"
                    className="p-2 rounded-xl font-medium bg-bluePrimary text-white"
                  >
                    CATEGORÍA
                  </th>
                  <td className="rounded-xl border-white  bg-blueSecondary text-white">
                    Nombre de la categoría
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
            <button>Ver sorteo</button>
            <button className=" m-4 px-5 py-2 rounded-lg font-medium text-white shadow-lg bg-greenPrimary">
              Sorteo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
