import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";

import Layout from "../components/layout/Layout";
 

export default function Board() {
  return (
    <Layout>

      <FilterCategories />
      <CardsBoard />
    </Layout>
  );
}
