/*
Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
    * 1. Un array de resistencia
    * 2. usando Math.abs obtener el valor absolutos de los elementos del array
    * 2.1 
    * 3. reduce, usar ciclos para hacer la suma
    * 4. retornar un mensaje del tipo 
    
*/

// firma funcion declarada
// map itera el array, para poderle aplicar cualquier operacion matematica y poder guardarlo en una variable
function sumOfResistors(resistorsArray){
    const resistorsAbs = resistorsArray.map((resistor) =>  Math.abs(resistor));
    const totalResistance = resistorsAbs.reduce((total, current) => total + current,0);
    return `${totalResistance} ohms`;
}

console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));
