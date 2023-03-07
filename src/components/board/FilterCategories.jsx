import React from "react";

export default function FilterCategories() {
  return (
    <div className="m-5 content-center mt-10">
      {/* Section Title and menu header*/}
      <div>
      <h2 className="text-2xl font-bold text-white mt-20">Grupos de competidores</h2>
      <span className="px-16 font-bold text-white">2 de 18 grupos sorteados</span>
      </div>
      <div className="text-right">
      <a className="text-white px-11 underline" href="">Cargar nuevo listado</a>
      <a className="text-white px-11 underline" href="">Ver plantillas de pirámides</a>
      </div>
      
      {/* section categories filter */}
      <div className="flex items-center justify-center m-12 min-w-full">
        <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        Código
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un Código</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>

      <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        Categoría
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un Categoría</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>

      <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        Grado
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un grado</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>

      <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        Rama
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una rama</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>
      
      <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        División
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una división</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>

      <div className="flex flex-col mx-4" >
      <label className=" mb-2 text-sm font-medium text-white">
        Estado
      </label>
      <select className="w-36 border-2 text-white bg-white/25 rounded-2xl py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un estado</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      </div>
      </div>
    </div>
  );
}
