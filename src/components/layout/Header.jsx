  import React from "react";
  import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";


export default function Header() {
  //function for search path in the route whit the function useLocation
  const ConditionNavbar = () => {
    const location = useLocation();
    console.log(location.pathname);

    if (location.pathname === "/Board") {
      return(
        <NavBar/>
      )
    }
  };

 


  return (
    <>
      <header className="p-4 bg-bluePrimary  text-white">
        <h1 className="text-lg md:text-3xl lg:text-4xl">Sorteador</h1>
        <h2 className="text-lg">Pirámides de competencia</h2>
        {ConditionNavbar()}
      </header>
      <div className="flex place-content-center bg-blueSecondary">
        <div className="w-96 w- lg:w-80 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-80 h-2 bg-blue"></div>
        <div className="w-96 lg:w-80 h-2 bg-red"></div>
      </div>
    </>
  );
}
