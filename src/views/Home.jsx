import React from "react";
import ExcelUploader from "../components/Home/ExcelUploader";

export default function Home() {
  return (
    <div id="home" className="h-screen">
    <h2 className="text-center pt-48 py-14 text-white text-3xl font-bold">Cargar datos</h2>
        <ExcelUploader />
    </div>
  );
}
