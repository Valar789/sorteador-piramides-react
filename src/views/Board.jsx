import React from "react";
import CardsBoard from "../components/board/CardsBoard";
 
import FilterCategories from "../components/board/FilterCategories";
import BreadCrumb from "../components/layout/BreadCrumb";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";

export default function Board() {
  return (
    <div>
      <div>
        <Header/>
        <BreadCrumb /> <p>2 de 18 grupos sorteados</p>
      </div>
      <FilterCategories />
      <CardsBoard />
    </div>
  );
}
