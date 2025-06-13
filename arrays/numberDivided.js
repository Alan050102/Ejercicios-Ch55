/*
Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
* 1. Pedirle al usuario que ingrese un número.
* 2. Se divide ese numero entre 2 y se guarda en una variable
* 3. Crea un arreglo vacio
* 4. Se ingresa el resultado de la division en el array vacio usando push
* 5. Repetir el paso anterior
* 6. Imprimir el arreglo en dos mitades.
*/
function numberDivide(n) {
    let mitadNumero = n / 2;
    let arregloVacio = [];
    for(let i = 0; i < 2; i++) {
        arregloVacio.push(mitadNumero);
    }
    return arregloVacio;
}
const userNumber = prompt("Ingresa un numero para dividirlo en 2 partes ");
alert("Tu numero dividido en un arreglo es: [" + numberDivide(userNumber) + "]");
