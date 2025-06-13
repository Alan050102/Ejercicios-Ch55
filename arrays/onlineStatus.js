/*
Online status
 
Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
* 1. Ver de que tamaño es el array de los usuarios conectados
* 2. Si el tamaño es 0, entonces no hay usuarios conectados
* 3. Si el tamaño es 1, solo hay un usuario conectado y se imprime su nombre
* 4.- Si el tamaño es 2, hay dos usuarios conectados y se imprimen sus nombres
* 5.- Si el tamaño de usuarios conectados es mayor que 2 se imprimen los primeros dos usuarios y se pone cuantos más hay en linea
* 6.- se imprime los usuarios en linea 
*/

function onlineStatus(user) {
    const count = user.length;
    switch(true){
        case(count === 0):
            return "No se encuentra nadie en linea"
            break;
        case(count === 1):
            return `El usuario: ${user[0]} esta en linea`;
            break;
        case(count === 2):
            return `Los usuarios: ${user[0]} y ${user[1]} estan en linea`;
            break;
        default:
            return `Los usuarios: ${user[0]}, ${user[1]} y ${count - 2} más están en linea`;
            break;
    }
}

console.log(onlineStatus([]));

console.log(onlineStatus(["mockIng99"])); 

console.log(onlineStatus(["mockIng99", "J0eyPunch"])); 

console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer"])); 