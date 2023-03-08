import React from "react";
import CardsBoard from "../components/board/CardsBoard";

import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";

import Layout from "../components/layout/Layout";

export default function Board() {
  return (
    <Layout>
      <div id="board" className="px-32 pt-10 text-white ">
        <BreadCrumb />
        <HeaderBoard />
        <SelectFliter/>
        <CardsBoard />
      </div>
    </Layout>
  );
}
