import React, { Fragment } from "react";

export default function Table({ dataExcel, filteredPerson }) {
  const renderTableRows = ({
    CodDep,
    Delegación,
    "Nombre Deportista": nombre,
    Rama,
    Categoría,
    Grado,
    División,
    "CBTE IND": codigo,
  }) => (
    <Fragment key={CodDep}>
      <div className="col-span-6 grid grid-cols-12 border-r border-b items-center">
        <div className="col-span-2">{CodDep}</div>
        <div className="col-span-4">{Delegación}</div>
        <div className="col-span-6">{nombre}</div>
      </div>
      <div className="col-span-6 grid grid-cols-12  border-b items-center">
        <div className="p-2 col-span-2">{Rama}</div>
        <div className="p-2 col-span-2">{Categoría}</div>
        <div className="p-2 col-span-2">{Grado}</div>
        <div className="p-2 col-span-2">{División}</div>
        <div className="p-2 col-span-4">{codigo}</div>
      </div>
    </Fragment>
  );

  return (
    <>
      <div className="text-center grid grid-cols-12 text-sm bg-white/25">
        <div className="border-r h-16 col-span-6 grid place-content-center">
          Datos Generales
        </div>
        <div className="col-span-6 grid place-content-center">Categoria</div>
        <div className="col-span-6 border-r grid grid-cols-12 bg-white/25">
          <div scope="col" className="col-span-2 py-3 font-normal">
            No.
          </div>
          <div scope="col" className="col-span-4 py-3 font-normal">
            DELEGACIÓN
          </div>
          <div scope="col" className="col-span-6 py-3 font-normal">
            NOMBRES Y APELLIDOS
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-12 bg-white/25">
          <div scope="col" className="col-span-2 py-3 font-normal">
            RAMA
          </div>
          <div scope="col" className="col-span-2 py-3 font-normal">
            EDAD
          </div>
          <div scope="col" className="col-span-2 py-3 font-normal">
            GRADO
          </div>
          <div scope="col" className="col-span-2 py-3 font-normal">
            PESO
          </div>
          <div scope="col" className="col-span-4 py-3 font-normal">
            CODIGO
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 text-center h-72 overflow-auto">
        {filteredPerson.length > 0
          ? filteredPerson.map(renderTableRows)
          : dataExcel.map(renderTableRows)}
      </div>
    </>
  );
}
