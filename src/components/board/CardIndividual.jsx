import React, { useState } from "react";

export default function CardIndividual({ keyName, groupByCode }) {
  const [isReady, setIsReady] = useState(false);
  const handleIsReady = () => setIsReady(true);

  return (
    <div className="col-span-6 mx-3 my-3  bg-white/20 border-2 border-gray-200 rounded-2xl shadow">
      {/*Card exterior*/}
      <div className="text-center grid grid-cols-12 p-4 border-b-2 rounded-t-2xl bg-white/30">
        <div className=" col-span-6">
          <p className="font-medium text-white"> Grupo {keyName}</p>
        </div>
        <div className="col-span-6 flex justify-end">
          <p className="text-white font-normal">
            {groupByCode.length} Competidores
          </p>
        </div>
      </div>

      {/*Card interior*/}
      <div className="p-2 grid grid-cols-12 text-white">
        <div className="col-span-6 ">
          <ul className="h-36 overflow-auto">
            {groupByCode.map((deportista, index) => (
              <div key={index} className="">
                <li className="text-sm">
                  {index + 1} {deportista["Nombre Deportista"]}
                </li>
                <p className="pl-12 mb-2 text-xs">{deportista["Delegación"]}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="col-span-6">
          <div className="">
            <table className="">
              <tbody className=" text-sm">
              <div>
                <div className="m-2 bg-white/30 rounded-lg">
                <tr className="">
                  <th
                    scope="row"
                    className=" px-5"
                  >
                    CATEGORÍA
                  </th>
                  <td className=" px-6 rounded-lg bg-white/30">
                    {groupByCode[0]["Categoría"]}
                  </td>
                </tr>
                </div>
                <div className="m-2 bg-white/30 rounded-lg">
                <tr className="">
                  <th className="px-10 font-medium">
                    GRADO
                  </th>
                  <td className="px-6 rounded-lg bg-white/30">
                    {groupByCode[0]["Grado"]}
                  </td>
                </tr>
                </div>
                <div className="m-2 bg-white/30 rounded-lg">
                <tr className="">
                  <th
                    scope="row"
                    className="px-5 font-medium "
                  >
                    RAMA
                  </th>
                  <td className="px-6 rounded-lg bg-white/30">
                    {groupByCode[0]["Rama"]}
                  </td>
                </tr>
                </div>
                <div className="m-2 bg-white/30 rounded-lg">
                <tr className="">
                  <th
                    scope="row"
                    className="px-5 font-medium "
                  >
                    DIVISIÓN
                  </th>
                  <td className="px-6 rounded-lg bg-white/30">
                    {groupByCode[0]["División"]}
                  </td>
                </tr>
                </div>
                </div>
              </tbody>
            </table>
          </div>
          <div>
            <span className="grid grid-cols 12 justify-end">
              {isReady ? (
                <div>
                  <button className="col-span-6 text-white m-4 px-5 py-2  underline">
                    Ver sorteo
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleIsReady}
                  className=" m-4 px-5 py-2 rounded-lg font-medium text-white bg-redbuttons"
                >
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
