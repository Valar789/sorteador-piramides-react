import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Obtener la ubicación actual de la página.
  const location = useLocation();
  console.log(location.pathname);

  // Devuelve el componente que representa la estructura general de la página.
  return (
    <div className="max-h-screen">
      {/* Mostrar el componente BreadCrumb si la ubicación es /data o /board */}
      {location.pathname === "/data" || location.pathname === "/board" ? <BreadCrumb /> : null}
      <section className="grid place-content-center h-screen">
        {children}
      </section>
      {/* Mostrar el componente Footer */}
      <Footer />
    </div>
  );
}