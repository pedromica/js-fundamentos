// * Función
function sum(num1, num2) {
    return num1 + num2;
}
var totalSum = sum(23, 53);

console.log (`El resultado de la "función sum" es ${totalSum}`) 


// * Función anónima
var restar = function (a,b) {
    return a - b
}

console.log (`La variable restar tiene una funcion que resta dos parametros ${restar(10,5)}`);


// * Función Flecha (Arrow  Function)

var multiply = (a,b) => {
    console.log(`invocano a multiply ` )
    return a * b
};

console.log(`La función flecha o ARROW FUNCTION, nombre de la funcion mas los argumentos entre parentesis() ${multiply(2,2)}`);

