import React from "react";

export default function Finder({
  dataExcel,
  setFilteredPerson,
  setSearchValue,
}) {
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filteredArray = dataExcel.filter((deportista) => {
      return (
        deportista["Nombre Deportista"]
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        deportista["Delegación"]
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    });
    setFilteredPerson(filteredArray);
    setSearchValue(searchValue);
  };

  return (
    <div className="flex justify-end">
      <div className="pb-4">
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rigth-0 flex items-center pl-3 ">
            <svg
              className="w-5 h-5 text-gray-500 text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onChange={handleSearch}
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400  "
            placeholder="Buscar por nombre o delegacion"
          />
        </div>
      </div>
    </div>
  );
}
