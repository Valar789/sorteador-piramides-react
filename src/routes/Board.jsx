import React from "react";
import BoardCard from "../components/board/BoardCard";
import Filter from "../components/board/Filter";
import BreadCrumb from "../components/layout/BreadCrumb";

export default function Board() {
  return (
    <div>
      <div>
        <BreadCrumb /> <p>2 de 18 grupos sorteados</p>
      </div>
      <Filter />
      <BoardCard />
    </div>
  );
}
