import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";

import Layout from "../components/layout/Layout";
 

export default function Board() {
  return (
    <div id="board" className="h-screen">
    <Layout>
      <FilterCategories />
      <CardsBoard />
    </Layout>
    </div>
  );
}
