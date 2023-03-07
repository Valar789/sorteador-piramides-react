import React from "react";
import CardIndividual from "./CardIndividual";
const list=[
  1,2,3,4,5,6,7,8,
]

export default function CardsBoard() {
  return (
 <div className="grid grid-cols-12">
  {
    list.map((card, i) =>(
      <CardIndividual key={i} ready={false} />
    ))
  }
 </div>
  );
}
