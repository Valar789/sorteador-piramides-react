import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Header from "../components/layout/Header";
import TableCategories from "../components/layout/pyramid/TableCategories";
import TablePositions from "../components/layout/pyramid/TablePositions";
import HeaderTemplates from "../components/templates-pyramids/HeaderTemplates";

export default function Templates() {
  return (
    <>
      <div id="" className="px-32 pt-10 text-white ">
        <BreadCrumb/>
        <HeaderTemplates />
        <TableCategories />
        <TablePositions />
      </div>
    </>
  );
}
