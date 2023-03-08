import React from "react";
import Header from "../components/layout/Header";
import TableCategories from "../components/layout/pyramid/TableCategories";
import TablePositions from "../components/layout/pyramid/TablePositions";
import HeaderTemplates from "../components/templates-pyramids/HeaderTemplates";

export default function Templates() {
  return (
    <>
      <Header />
      <HeaderTemplates/>
      <TableCategories />
      <TablePositions />
    </>
  );
}
