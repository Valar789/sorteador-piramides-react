import React from "react";
import ExcelUploader from "../components/Home/ExcelUploader";
import logoqubulowhite from '../assets/logos/logoqubulowhite.png'

export default function Home() {
  return (
    <div id="home" className="h-screen">
    <h2 className="text-center pt-48 py-14 text-white text-3xl font-bold">Cargar datos</h2>
        <ExcelUploader />
        <img className="absolute bottom-8 right-8 h-16" src={logoqubulowhite} alt="" />
        
    </div>


  );
}
