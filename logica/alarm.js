/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
* 1. Pedirle al usuario que coloque un mensaje
* 2. Pedirle al usuario cuantos segundos
* 3. Colocar el mensaje del usuario con su mensaje y del tiempo en forma de cronometro
* 4. Volver a monstrar el mensaje en un alert una vez terminado el tiempo
*/

function Alarm() {
    const userMessage = prompt("Ingresa un mensaje para tu recordatorio:");
    let seconds = prompt("En cuantos segundos necesitas que se te recuerde");

    console.log(`Alarma puesta para ${seconds} seconds. Esperando...`);

    setTimeout(() =>{
        alert(userMessage);
    }, seconds * 1000);
}

Alarm();