import React from "react";
import NavBar from "../components/layout/NavBar";
import TableCategories from "../components/layout/pyramid/TableCategories";
import TablePositions from "../components/layout/pyramid/TablePositions";

export default function Templates() {
  return (
	<>
	    <>
      <header className="p-4 bg-bluePrimary  text-white">
          <h1 className="text-lg md:text-3xl lg:text-4xl">Sorteador</h1>
          <h2 className="text-lg">Pirámides de competencia</h2>
      </header>
      <div className="flex place-content-center bg-blueSecondary">
        <div className="w-96 w- lg:w-80 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-80 h-2 bg-blue"></div>
        <div className="w-96 lg:w-80 h-2 bg-red"></div>
      </div>
    </>

	<NavBar/>
	
    <div className=" bg-white border-blueSecondary border-y-8 border-x-8">
      <div className="bg-gray flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
        >
          <span >PIRÁMIDE 3</span>
        </a>
        <a
          rel="noopener noreferrer"
          className=" bg-white flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50"
        >
          <span>PIRÁMIDE 4</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className=" flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
        >
          <span>PIRÁMIDE 8</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
        >
          <span>PIRÁMIDE 16</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className=" flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>PIRÁMIDE 32</span>
        </a>
      </div>
      <TableCategories/>
      <TablePositions/>
    </div>
	</>
  );
}
