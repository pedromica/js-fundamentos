/* Los valores booleans indican el apagado/encendido */

var trueVar = true
console.log (trueVar);

var falseVar = false;
console.log (falseVar)

console.log ('Igual doble solo numbers: ' + (5 == 5));
console.log ('Igual doble con string y number: ' + (5 == 5));

console.log ('Igual doble solo numbers: ' + (5 === 5));
console.log ('Igual doble con string y number: ' + (5 === 5));

console.log ('Es 2 mayor que 3? ' + (2 > 3));
console.log ('es 2 mayor que 3? ' + (3 < 2));

console.log ('--------------------------------');
var isSameName = 'juan' === 'Juan';

console.log (`Son el mismo nombre? ${isSameName}`);

// Doble igual "==": compara el valor de la variable pero no su tipo
// Triple igual "===": compara el valor de la variable y su tipo


// Truthy : cualquier cosa a un booleans

console.log ('Es 2 truthy? ' + Boolean(2));
console.log ('Es Pedromi truthy? ' + Boolean('Pedromi'));
console.log ('Es true truthy? ' + Boolean(true));


// Falsy 

console.log ('Es 0 falsy? ' + Boolean(0)); 
console.log ('Es un string vacio falsy? ' + Boolean(''));
console.log ('Es false truthy? ' + Boolean(false));

var surname; /* undefined */
console.log ('Es surname falsy? ' + Boolean(surname));

surname = null
console.log ('Es surname falsy? ' + Boolean(surname));




