/*
Positive dominance in Array

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

* 1. Se crea dos contadores (uno para positivos otro para negativos)
* 2. Se recorre el array con un ciclo for
* 3. Evaluamos cada elemento, si es positivo se aumenta el contador y si es negativo se aumenta el otro contador
* 4. Comparamos los contadores para determinar el dominante
    *4.1 si son más numeros positivos ponemos que el positivo domina
    *4.2si son más numeros negativos colocaremos que el negativo domina
*/

function positiveDominan(numberArray) {
    let positive = 0;
    let negative = 0;
    
    for(i = 0; i < numberArray.length; i++) {
        if(numberArray[i] > 0) {
            positive++;
            console.log(`Positivos: ${positive}`);
        } else {
            negative++;
            console.log(`Negativos: ${negative}`);
        }
    }
    if(positive > negative){
        return true;
    } else  if(positive < negative){
        return false;
    } else {
        return "Empate";
    }
}
console.log(positiveDominan([-1, -3, -5, 4, 6767]));

// ? Utilizando prompt
function positiveDom(){
    const numbers = prompt("Introduce varios numeros separados por espacio (ejemplo 2 3 -3 -4 -1 -2 2)");
    const numberArray = numbers.split(" ").map(num => Number(num.trim())); // * Limpiar los espacios y transformarlo a numeros
    let positive = 0;
    let negative = 0;
    console.log("positive Dominance con prompt")
    console.log([numberArray])
    for(let i=0; i < numberArray.length; i++) {
        if(numberArray[i] > 0){
            positive++;
            console.log(`Número positivo detectado (${numberArray[i]}). Total positivos: ${positive}`);
        } else if(numberArray[i] < 0) {
            negative++;
            console.log(`Número negativo detectado (${numberArray[i]}). Total negativos: ${negative}`);
        }
    }
    if(positive > negative) {
        console.log(`De los numeros que ingresastes:\n[${numbers}]\nEl dominante es el positivo.`);
    } else if(positive < negative){
        console.log(`De los numeros que ingresastes:\n[${numbers}]\nEl dominante es el negativo`);
    } else {
        console.log(`De los numeros que ingresastes:\n[${numbers}]\nNo hay ni un dominante, es un empate`);
    }
}
positiveDom();