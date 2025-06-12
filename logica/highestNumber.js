/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
* 1. Crear un prompt para que el usuario introduzca numeros
* 1.1 transformar el elemento introduccion a tipo number
* 2. Crear una arreglo para guardar los numeros
* 2. utilizar la funcion Math.max para saber el numero mas grande del arreglo 
* n. Imprimir el numero más grande de todos los que coloco el usuario
*/

function findHighestNumber(){
    const numbers = [];
    for(let i = 1; i <= 10; i++) {
        const userNumber = prompt(`Introduce el numero ${i
        }:`)
        const number = Number(userNumber);

        numbers.push(number);
    }
    const highestNumber = Math.max(...numbers);
    alert(`El numero más grande es: ${highestNumber}`);

    console.log(`Todos tus numeros que colocastes: ${numbers}`);
}

findHighestNumber();
