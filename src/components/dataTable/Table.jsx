import React, { useEffect, useState } from "react";
 


export default function Table() {
  const [dataExcel, setDataExcel] = useState([])
  useEffect(() => {
    const json = localStorage.getItem("excelData");
    if (json !== null) {
      const data = JSON.parse(json);
      setDataExcel(data);
    }
  }, []);

  
  
  
  return (
    <div className="relative h-64 bg-white  overflow-x-auto shadow-md sm:rounded-lg">

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
          {dataExcel.map(deportista =>(
               <tr key={deportista.CodDep} className="bg-white border-b bg-gray-800 border-gray-700 hover:bg-gray-50 hover:bg-gray-600">
               <td className="text-center">{deportista.CodDep}</td>
               {/* <td className="">{deportista.Nombre Deportista}</td> */}
               <td className="">{deportista.Delegación}</td>
               {/* <td className="">{deportista.Doc. Identificación}</td> */}
               <td className="">{deportista.Categoría}</td>
               <td className="">{deportista.Rama}</td>
               <td className="">{deportista.Grado}</td>
               <td className="">{deportista.División}</td>
               {/* <td className="">{deportista.CBTE IND}</td> */}
             </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}
