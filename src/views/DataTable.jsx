import React from "react";
import Finder from "../components/dataTable/Finder";
import Table from "../components/dataTable/Table";
import Layout from "../components/layout/Layout";

export default function DataTable() {
  return (
    <Layout>
      <Finder />
      <Table />
    </Layout>
  );
}
