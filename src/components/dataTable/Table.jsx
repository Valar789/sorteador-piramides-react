import React from "react";

export default function Table({ dataExcel, filteredPerson }) {
  return (
    <div className="h-64 overflow-auto bg-white  shadow-md sm:rounded-lg">
      <div className="flex justify-end bg-bluePrimary p-3 text-white">
        <h3>{filteredPerson.length} deportistas</h3>
      </div>
      <table className="w-full text-center text-sm  text-gray-500 text-gray-400">
        <thead className="bg-bluePrimary  text-white text-xs uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
            CodDep
            </th>
            <th scope="col" className="px-6 py-3">
            Delegación
            </th>
            <th scope="col" className="px-6 py-3">
            Nombre Deportista
            </th>
            <th scope="col" className="px-6 py-3">
            Categoría
            </th>
            <th scope="col" className="px-6 py-3">
              Rama
            </th>
            <th scope="col" className="px-6 py-3">
              Grado
            </th>
            <th scope="col" className="px-6 py-3">
              División
            </th>
            <th scope="col" className="px-6 py-3">
            CBTE IND
            </th>
          </tr>
        </thead>
        <tbody className="">
          {filteredPerson.length > 0
            ? filteredPerson.map((deportista) => (
                <tr
                  key={deportista.CodDep}
                  className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600"
                >
                  <td className="">{deportista["CodDep"]}</td>
                  <td className="">{deportista["Delegación"]}</td>
                  <td className="">{deportista["Nombre Deportista"]}</td>
                  <td className="">{deportista["Categoría"]}</td>
                  <td className="">{deportista["Rama"]}</td>
                  <td className="">{deportista["Grado"]}</td>
                  <td className="">{deportista["División"]}</td>
                  <td className="">{deportista["CBTE IND"]}</td>
                </tr>
              ))
            : dataExcel.map((deportista) => (
                <tr
                  key={deportista.CodDep}
                  className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600"
                >
                  <td className="">{deportista["CodDep"]}</td>
                  <td className="">{deportista["Delegación"]}</td>
                  <td className="">{deportista["Nombre Deportista"]}</td>
                  <td className="">{deportista["Categoría"]}</td>
                  <td className="">{deportista["Rama"]}</td>
                  <td className="">{deportista["Grado"]}</td>
                  <td className="">{deportista["División"]}</td>
                  <td className="">{deportista["CBTE IND"]}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
