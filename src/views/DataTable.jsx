import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";
import NavBar from "../components/layout/NavBar";
import iconDivider from '../assets/icons/iconDivider.svg'
import Loader from "../components/layout/Loader";

export default function DataTable() {
  const [dataExcel, setDataExcel] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(dataExcel);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const json = localStorage.getItem("excelData");
    console.log(json);
    if (json !== null) {
      const data = JSON.parse(json);
      console.log(data);
      setDataExcel(data);
    }
  }, []);

  const navigateBoard=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
     setIsLoading(false)
     navigate('/board')
    }, 2000);

  }

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : 
      <div className="grid place-content-center h-full">
      <div className="text-white max-w-5xl">
        <div className="grid grid-cols-12 mb-4">
          <Finder
            dataExcel={dataExcel}
            setSearchValue={setSearchValue}
            setFilteredPerson={setFilteredPerson}
          />
          <NavBar />
        </div>

        <div className="rounded-2xl bg-white/20 border">
          <Table dataExcel={dataExcel} filteredPerson={filteredPerson} />
        </div>

        <div className="flex justify-center gap-10 items-center  p-3 text-white">
          <div className="flex gap-2">
            <img src={iconDivider} alt="" />
            Total competidores{" "}
            {filteredPerson.length > 0
              ? filteredPerson.length
              : dataExcel.length}
          </div>
          <button onClick={navigateBoard} className="bg-red-600 px-7 py-2 rounded-md">
            Ver grupos
          </button>
        </div>
      </div>
      </div>}
    </Layout>
  );
}
