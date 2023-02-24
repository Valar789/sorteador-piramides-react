import React from "react";
import imgAlert from "../../images/logos/alert.svg";

export default function ModalError({ setShowModal }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-75">
      <div className="bg-white flex flex-col items-center justify-center ">
        <div className="bg-bluePrimary w-full text-center text-white py-2">
          Error
        </div>
        <div className="grid place-content-center mb-4  ">
          <img className="mx-auto h-24 my-5" src={imgAlert} alt="" />
          <h2 className="text-xl font-semibold text-center mt-4">
            El archivo no se pudo cargar
          </h2>
          <p className="text-center mt-2 ">
            Por favor revisa que el formato y la extensión del archivo sean los
            correctos.
          </p>
        </div>
        <button
          onClick={handleCloseModal}
          className="bg-gray text-white py-2 px-8 rounded-lg m-4"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
