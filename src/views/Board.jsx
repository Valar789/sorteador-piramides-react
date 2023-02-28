import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";
import BreadCrumb from "../components/layout/BreadCrumb";

export default function Board() {
  return (
    <div>
      <div>
        <BreadCrumb /> <p>2 de 18 grupos sorteados</p>
      </div>
      <FilterCategories />
      <CardsBoard />
    </div>
  );
}
