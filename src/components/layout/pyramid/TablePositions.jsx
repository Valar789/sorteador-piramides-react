import React from "react";

export default function TablePositions() {
  return (
<div className="my-96 px-10">
    <table className="text-left">
        <tbody className="py-2 text-sm">
            <tr className=" border  border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6  font-medium  bg-blueSecondary border-x-bluePrimary text-white">
                Primer puesto
                </th>
                <td className="border px-4 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6  font-medium  bg-blueSecondary ">
                    Segundo puesto
                </th>
                <td className="border px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 font-medium  bg-blueSecondary ">
                    Tercer puesto
                </th>
                <td className="border px-6 py-4">
                    
                </td>
            </tr>
            <tr className="border border-gray-200 dark:border-gray-700">
                 <th scope="row" className="px-6  font-medium   bg-blueSecondary ">
                    Cuarto Puesto
                </th>
                <td className="border px-40 py-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>
  );
}
