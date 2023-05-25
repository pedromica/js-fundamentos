const marks = [10, 4, 6, 9, 4, 6, 7];
//Para la longitud del array
console.log(`El array marks tiene una longitud de ${marks.length}`);
 
const length = marks.length; // 7 el total de elementos del array
const lasrMark = marks[marks.length -1]; // 7 - 1 porque siete es la longitud total, menos la posicion que seria la 6 //! Acceder al último elemento de un array

console.log(`La última nota es: ${lasrMark}`);
console.log(marks[6]); 

// Reasignar una posición de un array
marks[0] = 4; 
console.log (`La nota del primer alumno es ${marks[0]}`);


// Añadir al prinipio del array
marks.unshift(3);
console.log('Unshift:', marks)

// Eliminar el primer elemento del array
marks.shift();
console.log('Shift:', marks)

// Añadir elemento al final del array
marks.push(111);
console.log('Push', marks);

// Eliminar el útimo elemento al final del array
marks.pop();
console.log('Pop', marks)

const fruits = ['kiwi', 'manzana', 'melon'];
const firstFruit = fruits.slice(0,1);
console.log(`El array con la primera fruta es: ${firstFruit}`); //interpolado
console.log(`El array con la primera fruta es:`, firstFruit); // mas visual sin interporal

// Copiar un array entero
const copyFruits = fruits.slice(); //!copio el array
console.log('copy',copyFruits);

// Hacer una referencia a un array
const reassignedFruits = fruits;
reassignedFruits.push('Sandía'); //!modifica el array original a la copia con el slice no modifica

console.log('Reassigned fruits:',reassignedFruits);
console.log('Fruits:',reassignedFruits);
