import React from "react";
import ExcelUploader from "../components/Home/ExcelUploader";
import Layout from "../components/layout/Layout";
import logoqubulowhite from '../assets/logos/logoqubulowhite.png'

export default function Home() {
  return (
    <Layout>
      <div id="home" className="h-screen py-32 ">
        <h2 className="text-center py-10 text-white text-3xl font-bold">
          Cargar datos
        </h2>
        <ExcelUploader/>
        <img
          className="absolute bottom-8 right-8 h-16"
          src={logoqubulowhite}
          alt=""
        />
      </div>
    </Layout>
  );
}
