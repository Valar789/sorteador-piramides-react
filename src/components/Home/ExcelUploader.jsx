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
    <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col py-6">
      <div className="">
          <label className="text-white text-left text-lg mb-3">
            Ingresa el nombre del evento: *
          </label>
        <div className="">
          <input
            required
            onChange={(e) => setNameEvent(e.target.value)}
            className="rounded-xl text-lg py-1 px-44 border-2 bg-white/50 border-white"
            type="text"
          />
        </div>
        <label className="text-white text-left block mb-2 my-9 text-lg">
          Carga el listado de competidores: *
        </label>
        <div className="gap-3 mb-3">
          <input
            onChange={handleFileUpload}
            type="file"
            name="FileAttachment"
            id="FileAttachment"
            className="pl-0 pr-56 cursor-pointer relative file-upload rounded-xl text-lg text-white px-24 py-1 border-2  bg-white/50 border-white"
          />
   
        </div>
        <div>
          <span className="w-2/3 inline-block text-white text-sm py-5">
          Verifica que el listado sea el correspondiente para sortear y que se
          encuentre en la estructura definida en formato Excel con extensión
          .XLSM o .XLSX.{" "}
        </span>
          </div>
        <div className="flex items-center">
          <a href="" className=" underline mx-3 my-3 border-redborderbuttons text-white p-3 rounded-xl">
          Descargar Plantilla de sorteos          </a>

          <button className="bg-redbuttons border-2 my-3 border-redborderbuttons text-white p-3 rounded-xl">
            Comenzar
          </button>
        </div>
      </div>

      {showModal && <ModalError setShowModal={setShowModal} />}
    </form>
  );
}
