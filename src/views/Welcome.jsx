import React from "react";
import Login from "../components/welcome/Login";
import footerWelcome from "../assets/footerWelcome.png";

export default function Welcome() {
  return (
    <div id="welcome" className="h-screen w-full  text-white">
      {/* section left */}

      <div className="fixed left-32 top-24">
        <h2 className="text-4xl font-bold mb-3 ">!Hola!</h2>
        <p className="text-3xl  w-96">
          Con nuestra aplicación de sorteos de pirámides para competencias,
          podrás crear rápidamente un esquema equilibrado y justo para todos los
          competidores.
        </p>
      </div>

      {/* section Access */}

      <img
        className="object-cover w-full bg-blueSecondary/25 h-full"
        src={footerWelcome}
        alt="footer"
      />
      <Login />
    </div>
  );
}
