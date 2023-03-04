import React, { useEffect, useState } from "react";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";
import NavBar from "../components/layout/NavBar";

export default function DataTable() {
  const [dataExcel, setDataExcel] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(dataExcel);

  useEffect(() => {
    const json = localStorage.getItem("excelData");
    console.log(json)
    if (json !== null) {
      const data = JSON.parse(json);
      console.log(data)
      setDataExcel(data)
    }
  }, []);

  return (
    <Layout>
      <NavBar/>
      <Finder
        dataExcel={dataExcel}
        setSearchValue={setSearchValue}
        setFilteredPerson={setFilteredPerson}
      />
      <Table dataExcel={dataExcel} filteredPerson={filteredPerson} />
    </Layout>
  );
}
