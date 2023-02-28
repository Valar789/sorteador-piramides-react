import React from "react";
import { bdPruebas } from "../../consts/bdPruebas";


export default function Table() {
  return (
    <div className="relative bg-white  overflow-x-auto shadow-md sm:rounded-lg">

      <table className="w-full text-sm text-left text-gray-500 text-gray-400">
        <thead className="bg-bluePrimary text-white text-xs uppercase bg-gray-50 bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
            DELEGACIÓN
            </th>
            <th scope="col" className="px-6 py-3">
            NOMBRES Y APELLIDOS
            </th>
            <th scope="col" className="px-6 py-3">
            RAMA
            </th>
            <th scope="col" className="px-6 py-3">
            RAMA
            </th>
            <th scope="col" className="px-6 py-3">
            GRADO
            </th>
            <th scope="col" className="px-6 py-3">
            PESO
            </th>
            <th scope="col" className="px-6 py-3">
            CÓDIGO
            </th>
          </tr>
        </thead>
        <tbody>
          {bdPruebas.map(deportista =>(
               <tr className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
               <td className="text-center">{deportista.id}</td>
               <td className="">{deportista.delegacion}</td>
               <td className="">{deportista.nombres}</td>
               <td className="">{deportista.rama}</td>
               <td className="">{deportista.edad}</td>
               <td className="">{deportista.grado}</td>
               <td className="">{deportista.peso}</td>
               <td className="">{deportista.codigo}</td>
             </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}
