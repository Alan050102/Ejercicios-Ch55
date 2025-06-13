/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
* 1. Pedirle al usuario que escriba una palabra
* 1.1 meterlo en un array
* 1.2 transformar todos los caracteres a lowercase para evitar errores de caracter
* 2. Dividir la palabra por letras
* 3. Hacer la comparación para ver si las letras son iguales tanto de alreves como originalmente es
* 4. Imprimir en un alert si es palindromo o no
*/

function palindrome() {
    const palabra = prompt("Escribe una palabra para saber si es palindromo");
    const minusculas = palabra.toLowerCase();
    const reversaPalabra = minusculas.split('').reverse().join('');

    if(minusculas === reversaPalabra) {
        alert(`La palabra: ${palabra} es un palindromo`);
        console.log(`La palabra original: ${palabra}`);
        console.log(`La palabra de forma invertida: ${reversaPalabra}`);
    } else {
        alert(`La palabre: ${palabra} no es un palindromo`);
        console.log(`La palabra original: ${palabra}`);
        console.log(`La palabra de forma invertida: ${reversaPalabra}`);
    }

}

palindrome();