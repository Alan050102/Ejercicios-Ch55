/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
* 1. Pedirle al usuario un numero para hallar su factorial
* 2. Se realiza la funcion recursiva para encontrar la factorial
* 3. Encuentra la factorial n! = 1 <= n
* 4. Mostrar el resultado
*/

function factorial() {
    const userNumber = prompt("Ingresa un número al cual quieras sacarle su factorial");
    const number = Number(userNumber);
    console.log(number);

    function calcularFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calcularFactorial(n - 1);
        }
    }

    const result = calcularFactorial(number);
    alert(`El resultado del factorial de ${number} es ${result}.`);
    return result;
}

factorial();
