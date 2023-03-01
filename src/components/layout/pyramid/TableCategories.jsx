import React from "react";

export default function TableCategories() {
  return (
    <div class="float-right m-6 px-10">
      <table class="text-left">
        <thead class="text-center text-lg">
          <tr>
            <th>CÓDIGO</th>
            <th>CMDYA372</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr class=" border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-2 font-medium  bg-blueSecondary border-x-bluePrimary text-white"
            >
              CATEGORÍA
            </th>
            <td class="border px-4 py-4">Nombre de la categoría</td>
          </tr>
          <tr class="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium   bg-blueSecondary text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              GRADO
            </th>
            <td class="border px-6 py-4">Nombre del Grado</td>
          </tr>
          <tr class="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium   bg-blueSecondary text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              RAMA
            </th>
            <td class="border px-6 py-4">Nombre de la Rama</td>
          </tr>
          <tr class="border border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium   bg-blueSecondary text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              DIVISIÓN
            </th>
            <td class="border px-6 py-4">Nombre de la división</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
