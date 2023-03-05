import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateTemplates = () => {
    navigate("/templates")
  }

  const navigateBoard = () => {
    navigate("/board")
  }

  return (
    <nav className="absolute w-full top-8 left-96   border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              onClick={navigateHome}
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              Cargar nuevo documento
            </li>
            <li 
            onClick={navigateTemplates}
            className="block py-2 pl-3 pr-4 text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Ver plantillas pirámides </li>
          </ul>
          <div className="px-5 py-3.5 text-center mr-3 md:mr-0">
            <button
            onClick={navigateBoard} 
            className="px-5 bg-greenPrimary rounded-xl p-2 text-white">
              Sortear
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
