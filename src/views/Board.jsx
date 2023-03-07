import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";
import BreadCrumb from "../components/layout/BreadCrumb";

import Layout from "../components/layout/Layout";
 

export default function Board() {
  return (
    <div id="board" className=" h-screen grid place-content-center pt-28">
    <Layout>
    <div className="max-w-5xl">
      <BreadCrumb/>
    <FilterCategories />
      <CardsBoard />
    </div>
    </Layout>
    </div>
  );
}
