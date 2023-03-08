import React, { useEffect, useState } from "react";
const selectFilters = [
  "Delegación",
  "Categoría",
  "Rama",
  "Grado",
  "División",
  "CBTE IND",
  "Estado"
];
export default function SelectFliter() {
  const [data, setData] = useState([])
  const [valuesSelect, setValuesSelect] = useState({})

useEffect(() => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("excelData"));
  setData(dataFromLocalStorage);
  //recibe data (json) y retorna un objeto 
  function obtenerPropiedadesUnicas() {
    let propiedades = {};
    dataFromLocalStorage.forEach((obj) => {
      for (let key in obj) {
        if (key !== "CodDep" && key !== "Nombre Deportista" && key !== "Doc. Identificación") {
          let value = obj[key];
          if (Array.isArray(propiedades[key])) {
            if (!propiedades[key].includes(value)) {
              propiedades[key].push(value);
            }
          } else {
            propiedades[key] = [value];
          }
        }
      }
    });
    return propiedades;
  }
  const res = obtenerPropiedadesUnicas()
  setValuesSelect(res)
}, [])



  return (
    <div className="flex items-center justify-center min-w-full mb-16">
      <div className="flex flex-col ">
        <div className="flex">
        {selectFilters.map((filter, i) => (
            <div key={i} className="flex flex-col mx-5">
              <label className="mb-2 text-sm font-medium text-center">{filter}</label>
              <select className="w-36 border-2 bg-white/20  rounded-lg py-3 px-4 shadow-lg text-sm">
                <option value="">Escoge un Código</option>
                {valuesSelect[filter] &&
                  valuesSelect[filter].map((option, j) => (
                    <option key={j} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
