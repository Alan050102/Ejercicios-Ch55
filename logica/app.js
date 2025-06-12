const username = prompt("Hola, ingresa tu nombre de usuario");
const age = prompt("Ahora ingresa tu edad");
const favoriteMovies  = [];
let counter = 0;
// Vamos a pedir 5 peliculas primero
alert("A continuación te vamos a pedir tus 5 peliculas favoritas");
for(let i = 1; i <= 5; i++) {
    favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}:`)); // Los strings dentro de `` se conocen como string literal
    // *concatenar variables y textro de una forma más sencilla y legible
    // *equivalente a "ingresar la pelocula numero" + i + ":"

}
console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:
    `);

while(counter < favoriteMovies.length) {
    console.log(`Mi pelicula favorita ${counter +1} es: ${favoriteMovies[counter]}`);
    counter++;
}