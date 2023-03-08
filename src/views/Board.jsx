import React, { useState } from "react";
import CardsBoard from "../components/board/CardsBoard";

import HeaderBoard from "../components/board/HeaderBoard";
import SelectFliter from "../components/board/SelectFilter";
import BreadCrumb from "../components/layout/BreadCrumb";

import Layout from "../components/layout/Layout";

export default function Board() {

  const [participantsForCode, setparticipantsForCode] = useState([])

  return (
    <Layout>
      <div id="board" className="px-32 pt-10 text-white bg-red-200">
        <BreadCrumb />
        <HeaderBoard />
        <SelectFliter setparticipantsForCode={setparticipantsForCode}/>
        <CardsBoard />
      </div>
    </Layout>
  );
}
