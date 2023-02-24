import React from "react";
import Login from "../components/welcome/Login";

export default function Welcome() {
  return (
    <div className="">
      {/* section left */}
      <div>
        <h2 className="text-white">Bienvenido</h2>
        <p>
        Con nuestra aplicación de sorteos de pirámides para competencias, podrás crear rápidamente un esquema equilibrado y justo para todos los competidores.
        </p>
      </div>
        {/* section Access */}
      <dir>
        <Login/>
      </dir>
    </div>
  );
}
