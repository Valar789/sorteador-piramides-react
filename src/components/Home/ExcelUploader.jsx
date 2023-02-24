import React, { useState } from "react";
import ModalError from "./ModalError";

export default function ExcelUploader() {
  const XLSX_MIME_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  const XLSM_MIME_TYPE = "application/vnd.ms-excel.sheet.macroEnabled.12";

  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

 
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type === XLSX_MIME_TYPE ||
        selectedFile.type === XLSM_MIME_TYPE)
    ) {
      setFile(selectedFile);
    } else {
      setFile(null);
      setShowModal(true);
    }
  };

  return (
    <div className="">
      <h2>Nombre del evento</h2>
      <input type="text"/>
      <h3 className="text-white text-center text-2xl mb-8">
        Cargar archivo de Pirámide de competencia
      </h3>
      <div className="flex place-content-center gap-3  mb-3">
        <div className="flex pl-8 pr-4 pt-3 justify-between gap-8 file-upload relative rounded-xl bg-white">
          <div>
            <span className="font-bold">
              {file ? file.name : "Seleccionar archivo"}
            </span>
            <input
              onChange={handleFileUpload}
              type="file"
              name="FileAttachment"
              id="FileAttachment"
              className="opacity-0 absolute"
            />
          </div>
          <button
            id="buttonAdd"
            className="grid place-content-center w-7 h-7 pb-1 font-light text-xl bg-blueSecondary text-white rounded-full"
          >
            +
          </button>
        </div>

        <button className="bg-greenPrimary text-white p-3 rounded-xl">
          Comenzar
        </button>
      </div>

      <span className="text-white">
        * Verifica que el archivo esté en formato Excel y extensión .xlsm
      </span>

      {showModal && <ModalError setShowModal={setShowModal} />}
    </div>
  );
}
