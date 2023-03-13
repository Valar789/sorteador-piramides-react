/* 
recibe la data (lista con obj de los deportista ) 
retorna un objeto con las nombres de las propiedades y 
los valores son listas con todos los valores unicos de todos los valores de la data eje con 2 propiedades.

  {
    Grado:['Avanzados', 'Principiantes', 'Intermedios', 'Inermedios'],
    Rama: ['Masculino', 'Femenino'],
  }
  
*/
function obtenerPropiedadesUnicas(dataFromLocalStorage) {
    let propiedades = {};
    dataFromLocalStorage.forEach((obj) => {
      for (let key in obj) {
        if (
          key !== "CodDep" &&
          key !== "Nombre Deportista" &&
          key !== "Doc. Identificación"
        ) {
          let value = obj[key];
          if (Array.isArray(propiedades[key])) {
            if (!propiedades[key].includes(value)) {
              propiedades[key].push(value);
            }
          } else {
            propiedades[key] = [value];
          }
        }
      }
    });
    return propiedades;
  }

export default obtenerPropiedadesUnicas