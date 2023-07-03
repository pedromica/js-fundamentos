console.log('----Ejercicio-7----')
//! 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i <= 9; i++){
    console.log(`Bucle 'for' desde 0 a 9 = ${i}`)
}
//! 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (escala = 0; escala <= 9; escala++) {
    if (escala % 2 === 0){
        console.log(escala);
    }
}

//! 1.3 Crea un bucle para conseguir dormir contando ovejas.
//! Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//! Muestra por consola un mensaje diciendo 'Intentando dormir ' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (ovejas = 1 ; ovejas <= 10 ; ovejas++){
    if (ovejas < 10 ) {
        console.log (`${ovejas} Intento dormir 🐐`) 
    } else {
        console.log (`En la ${ovejas} me he quedado frito 💤😴`)
    }
    

}

console.log('----Ejercicio-8----')

function sum(numberOne, numberTwo){
    if (numberOne > numberTwo) {
        console.log('Es mayor ' + numberOne)
    } else {
        console.log('Es mayor '+ numberTwo)
    }
}

sum(10,12);
sum(9,8);
sum(-500, -501);

console.log('----Ejercicio-9----')
  
//! Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, encaso de que dos strings tenga la misma longitud deberá devolver el primero.Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.', 'SuperSuperMan'];



function findLongestWord(array) {

    let maxName = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxName.length) {
        maxName = array[i];}
    }

return maxName;
}

const maxName = findLongestWord(avengers);
console.log(maxName);



/* function findLongestWord(avengers) {
    let maxname = 0
    for (let i = 0; i < avengers.length; i++) {
        const name = avengers[i];
    }
    if (avengers.length > maxname ) {
        name = avengers.length
    }
return maxname;
} */



console.log('----Ejercicio-10----')

//!Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.Implemente la función denominada   umNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]; 

const average = (arrayNumbers) => {
    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i++){
        const number = arrayNumbers[i];
        sum = sum + number
    }

    return sum
}

arrayNumbers = average(numbers);
console.log(`La Suma total de Array "numbers" es: ${arrayNumbers}`);

console.log('------------Ejercicio-11---------')

//! Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbersEj11 = [12, 21, 38, 5, 45, 37, 6]; 

const promedio = (ejerccio11) => {
    let sum = 0;

    for (let i = 0; i < ejerccio11.length; i++) {
        const number = ejerccio11[i];
        sum = sum + number;
    }

    return sum / ejerccio11.length;
}

ejerccio11 = promedio(numbersEj11)
console.log(ejerccio11);
console.log(`El promedio; es la suma de todos dividido por todos que es;${ejerccio11}`);


console.log('-------------Ejercicio-11----------------------')