import React, { useContext, useState } from "react";
import ModalError from "./ModalError";
import { createContext } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { excelTypes } from "../../consts/excelTypes";
export const ThemeContext = createContext();

export default function ExcelUploader() {
  const [nameEvent, setNameEvent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [excelFile, setExcelFile] = useState(null);

  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    context.nameEvent = nameEvent;
    console.log(excelFile);
    console.log(context.nameEvent);
  };
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && excelTypes.includes(selectedFile.type)) {
      setExcelFile(selectedFile);
    } else {
      console.log("plz select your file");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="grid place-content-center text-center p-3 mb-8">
        <h2 className="text-white text-center text-2xl mb-3">
          Nombre del evento
        </h2>
        <input
          onChange={(e) => setNameEvent(e.target.value)}
          className="rounded-xl text-lg px-24 py-1 bg-white"
          type="text"
        />
      </div>
      <h3 className="text-white text-center text-2xl mb-8">
        Cargar archivo de Pirámide de competencia
      </h3>
      <div className="flex place-content-center gap-3  mb-3">
        <div className="flex pl-8 pr-4 pt-3 justify-between gap-8 relative rounded-xl bg-white">
          <div>
            <span className="font-bold">
              {excelFile ? excelFile.name : "Seleccionar archivo"}
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

        <button
          type="submit"
          className="bg-greenPrimary text-white p-3 rounded-xl"
        >
          Comenzar
        </button>
      </div>

      <span className="text-white">
        * Verifica que el archivo esté en formato Excel y extensión .xlsm
      </span>

      {showModal && <ModalError setShowModal={setShowModal} />}
    </form>
  );
}
