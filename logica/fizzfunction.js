// firma de la funcion
const fizzbuzz = (counterNumber) => {
    let counter = 1;
    do {
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log(`El numero ${counter} es: FizzBuzz`);
        } else if (counter % 3 == 0) {
            console.log(`El nuemro ${counter} es: Fizz`);
        } else if (counter % 5 === 0) {
            console.log(`El numero ${counter} es: Buzz`);
        } else {
            console.log(counter);
        }
        counter++;
    } while (counter <= counterNumber);
}

console.log("50 veces");
fizzbuzz(50);
console.log("200 veces");
fizzbuzz(200);

// *Utilizando un prompt para que el usuario elija el numero de veces
const num = prompt("Ingresa el valor el numero de veces que usaras el bucle");
console.log(`${num} veces`);
fizzbuzz(num);