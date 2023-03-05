import React from "react";

export default function TableCategories() {
  return (
    <div className="float-right m-6 px-10">
      <table className="text-left">
        <thead className="text-center text-lg">
          <tr>
            <th>CÓDIGO</th>
            <th>CMDYA372</th>
          </tr>
        </thead>
        <tbody className=" text-sm">
          <tr className=" border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-2 font-medium  bg-blueSecondary border-x-bluePrimary text-white"
            >
              CATEGORÍA
            </th>
            <td className="border px-4 ">Nombre de la categoría</td>
          </tr>
          <tr className="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-2 font-medium   bg-blueSecondary"
            >
              GRADO
            </th>
            <td className="border px-6 ">Nombre del Grado</td>
          </tr>
          <tr className="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-2 font-medium   bg-blueSecondary"
            >
              RAMA
            </th>
            <td className="border px-6">Nombre de la Rama</td>
          </tr>
          <tr className="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-2 font-medium   bg-blueSecondary"
            >
              DIVISIÓN
            </th>
            <td className="border px-6 ">Nombre de la división</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
