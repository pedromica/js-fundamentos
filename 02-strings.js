/* var name = "Pedro Miguel"; //Siempre Comillas simples o francesas
var surname = "Cánovas";

var fullName = name + " " + surname;

console.log(fullName); */

//Lista de ingredientes: leche, arroz, limón y canela

var firsIngredient = 'leche';
var secondIgredient = 'arroz';
var thirdIngredient = 'limón';
var fourthIngredient = 'canela';

var recipe = 'Lista de Ingredientes : \n' + firsIngredient + ', ' + secondIgredient + ', ' + thirdIngredient + ' y ' + fourthIngredient + '.'; 

console.log (recipe);

/* También podemos interpolar variables dentro de strings usando los BACKTICKS (``) */
var recipeInterpolated = 
`Lista de ingredientes:
- ${firsIngredient}.
- ${secondIgredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`

console.log (recipeInterpolated);
console.log ('-------------------------');
var car = 'Fiat'
car.toUpperCase ()

var myCar =`Mi coche es un ${car.toUpperCase ()}`; /* TODO EN MAYUSCULA */

console.log (myCar);

console.log ('-------------------------');

var dog = 'CARLINO'
var myDog = `Mi perrito es un ${dog.toLowerCase()}` /* TODO EN MINUSCULA */

console.log (myDog);

console.log ('-------------------------');

var computerDescription = '   Ordenador muy pontente con mucha RAM. '

console.log(computerDescription.trim());    /* LIMPIA O SE COME LOS ESPACIOS AL PRINCIPIO Y AL FINAL */

console.log ('-------------------------');

var scholl = 'The PMBA'
var schollName = scholl.slice(4, 6) /* CREA UN INDICE EMPIEZA POR UNA POSICION Y ACABA POR OTR (EMPIENZA, ACABA) O CORTAR UN TROZO  */

console.log (schollName);

