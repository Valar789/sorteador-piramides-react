import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";
import NavBar from "../components/layout/NavBar";
import iconDivider from '../assets/icons/iconDivider.svg'

export default function DataTable() {
  const [dataExcel, setDataExcel] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(dataExcel);

  useEffect(() => {
    const json = localStorage.getItem("excelData");
    console.log(json);
    if (json !== null) {
      const data = JSON.parse(json);
      console.log(data);
      setDataExcel(data);
    }
  }, []);

  return (
    <Layout>
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
          <Link to="/board" className="bg-red-600 px-7 py-2 rounded-md">
            Ver grupos
          </Link>
        </div>
      </div>
      </div>
    </Layout>
  );
}
