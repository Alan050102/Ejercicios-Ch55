/*
Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

* 1. Crear una variable para los numeros
* 2. Crear una variable para la longitud del futuro arreglo
* 3. Crea un arreglo vacio
* 4. Multiplicar, por el mismo elemento que proporciona el usuario
* 5. Expandir la longitud del arreglo con la variable de lenght
*/

function arrayOfMultiples() {
    const number = prompt("Introduce el numero al que quieres multiplicar");
    let num = Number(number);

    const len = prompt("¿Cuantas veces lo vas a multiplicar?");
    let lenght = Number(len);

    let array = [];
    for(i = 1; i <= lenght; i++) {
        array.push(num * i);
        console.log(array);
    }
    alert(`Esta es tu arreglo de multiplicación \n[${[array.join(", ")]}]`);
}
arrayOfMultiples();