import React, { useState } from "react";
import ExcelUploader from "../components/Home/ExcelUploader";
import Layout from "../components/layout/Layout";
import logoqubulowhite from "../assets/logos/logoqubulowhite.png";
import Loader from "../components/layout/Loader";
import ErrorComponent from "../components/layout/error/ErrorComponent";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return <ErrorComponent setError={setError} />;
  } else {
    return (
      <Layout>
        {isLoading ? (
          <Loader />
        ) : (
          <div id="home" className="h-full grid place-content-center">
            <h2 className="text-center py-14 text-white text-3xl font-bold">
              Cargar datos
            </h2>
            <ExcelUploader setIsLoading={setIsLoading}  setError={setError} />
            <img
              className="absolute bottom-8 right-8 h-16"
              src={logoqubulowhite}
              alt=""
            />
          </div>
        )}
      </Layout>
    );
  }
}
