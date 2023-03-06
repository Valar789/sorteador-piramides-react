import React, { useContext, useState } from "react";
import ModalError from "./ModalError";
import { createContext } from "react";
import GlobalContext from "../../utils/GlobalContext";
import { excelTypes } from "../../consts/excelTypes";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

export const ThemeContext = createContext();

export default function ExcelUploader() {
  const [nameEvent, setNameEvent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [excelFile, setExcelFile] = useState(null);

  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      context.nameEvent = nameEvent;
      const workbook = XLSX.read(excelFile);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const json = JSON.stringify(data);
      localStorage.setItem("excelData", json);
      localStorage.setItem("nameEvent", nameEvent);
      navigate("/data");
    } else {
      setShowModal(true);
    }
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
 
    if (selectedFile) {
      if (selectedFile && excelTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setShowModal(true);
      }
    } else {
      console.log("plz select your file");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div className="p-3 mb-8 w-full ">
        <h2 className="text-white text-2xl mb-3">
          Nombre del evento
        </h2>
        <input
          required
          onChange={(e) => setNameEvent(e.target.value)}
          className="rounded-xl text-center text-lg px-24 py-1 bg-white"
          type="text"
        />
      </div>
      <h3 className="text-white text-2xl mb-8">
        Cargar archivo de Pirámide de competencia
      </h3>
      <div className="flex place-content-center gap-3  mb-3">
        <div className="flex pl-8 pr-4 pt-3 justify-between gap-8 file-upload relative rounded-xl bg-white">
          <input
            onChange={handleFileUpload}
            type="file"
            name="FileAttachment"
            id="FileAttachment"
            className=""
          />
        </div>

        <button className="bg-greenPrimary text-white p-3 rounded-xl">
          Comenzar
        </button>
      </div>

      <span className="text-white">
        * Verifica que el archivo esté en formato Excel y extensión xlsx o xlsm
      </span>

      {showModal && <ModalError setShowModal={setShowModal} />}
    </form>
  );
}
