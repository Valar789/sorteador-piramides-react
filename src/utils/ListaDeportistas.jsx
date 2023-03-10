// import React from 'react'
// import { createGroupsByCode } from './createGroupsByCode';
// import determinatePyramid from './determinatePyramid';


// export default function ListaDeportistas({groupByCode}) {
//   const grupos = createGroupsByCode(groupByCode);
//   return (
//     <div>
//         {grupos.map((grupo, index) => {
//           const { cantidad, tipo } = determinatePyramid(grupo);
//           return (
//             <div key={index} className={tipo}>
//               <h2>Grupo {index + 1}</h2>
//               <ul>
//                 {grupo.map(deportista => (
//                   <li key={deportista.id}>{deportista.nombre}</li>
//                 ))}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//   )
// }