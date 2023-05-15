// * * Bucle While

var count = 0 ;

while (count <= 10) {
    console.log (`La cuenta va por ${count}`);

    count ++
}

var negativeCount = 10;

while (negativeCount >= 0) {
    console.log (`La cuenta negativa va por ${negativeCount}`);


    negativeCount--
}

console.log('-----------------------------');

/* 
var timesRepeated = 0;
var sentence = 'La programación me gusta aaaaaa'

for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a')
    timesRepeated +=1;
}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`); 

*/

//! Trasformación del bucle for al while


var timesRepeated = 0;
var sentence = 'Voy a contar las letras a de esta frase';
var i = 0; 

while ( i < sentence.length) {
    
    if (sentence[i] === 'a') {
        timesRepeated +=1;
    }

    i++
} 

console.log (`Las letras "a" se repite unas ${timesRepeated} veces`);