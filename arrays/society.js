/*
Secret Society
 

Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
* 0. ordenar el array en orden alfabetico
* 1. Recibimos un array que tiene nombres
    * 1.1 Estos nombres empiezan en mayus
    * 2.1 Inicializar una variable para guardar iniciales
* 2. Utilizar un ciclo para recorrer el array
* 3. Obtener la primera letra de cada nombre utilizando la notacion de corchetes
* 4. pegar la inicial de cada nombre para
* n. Retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre 
*/

// let nombre = "zeltzin";
//  Obtener la letra de un string
// console.log(nombre[3]);

// firma expression
const secretName = function(namesArray){
    let societyName = "";
    const sortedNames = namesArray.toSorted();
    sortedNames.forEach((name) => societyName = societyName + name[0]);
    return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));