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
  