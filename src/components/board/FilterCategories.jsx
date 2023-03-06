import React from "react";

export default function FilterCategories() {
  return (
    <div className="flex place-content-center m-5 content-center">
      <label className=" mb-2 text-sm font-medium text-bluePrimary">
        Código
      </label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un Código</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      <label className=" mb-2 text-sm font-medium text-bluePrimary">
        Categoria
      </label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una categoría</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      <label className=" mb-2 text-sm font-medium text-bluePrimary">
        Grado
      </label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge un grado</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      <label className=" mb-2 text-sm font-medium text-bluePrimary">Rama</label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una Rama</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      <label className=" mb-2 text-sm font-medium text-bluePrimary">
        División
      </label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una división</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
      <label className=" mb-2 text-sm font-medium text-bluePrimary">Estado</label>
      <select className="rounded-2xl mx-5 py-3 px-4 shadow-lg text-sm">
        <option value>Escoge una Estado</option>
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
      </select>
    </div>
  );
}
