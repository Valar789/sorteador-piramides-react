import React, { useEffect, useState } from "react";
const selectFilters = [
  "Rama",
  "Edad",
  "Grado",
  "Peso",
  "Codigo",
  "Estado",
];
export default function SelectFliter() {
  const [data, setdata] = useState(localStorage.getItem("excelData"))


  const keyRama = data.map(e=>e['Rama']);
  const ramaIndividual = keyRama.filter((e, i )=> keyRama.indexOf(e) === i )


  return (
    <div className="flex items-center justify-center min-w-full mb-16">
      <div className="flex flex-col ">
       
        <div className="flex">
          {selectFilters.map((filter, i) => (
            <div key={i} className="flex flex-col mx-5">
              <label className="mb-2 text-sm font-medium text-center">{filter}</label>
              <select className="w-36 border-2 bg-white/20  rounded-lg py-3 px-4 shadow-lg text-sm">
                <option value>Escoge un Código</option>
                <option value="">Opcion 1</option>
                <option value="">Opcion 2</option>
                <option value="">Opcion 3</option>
                <option value="">Opcion 4</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
