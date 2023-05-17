
// * Pueden recibir cualquier número de argumentos que llamaremos como queramos
// * Siempre debe devolver algo usando return, si no lo hace realmente devuelve undefined
// *  

function upperCase (text) {
    return text.toUpperCase();
}
const myName = upperCase('pedromi');
console.log(myName)
const yourName = upperCase ('juanito');
console.log(yourName)
const myFrase = upperCase ('inexplicable a nadie no hay nada que explicar');
console.log(myFrase);


function getPriceByCity(city) {
    
    /* var city = 'Valencia' */
    var price = 0

    if (city === 'Madrid'){
        price = 10;
    } else if (city === 'Valencia') {
        price = 5;
    } else {
        price = 11;
    }

    return price;
}

var priceInMadrid = getPriceByCity('Madrid');
var priceInValencia = getPriceByCity('Valencia');
var priceInCadiz = getPriceByCity('Cadiz');

console.log(`El precio es:${priceInMadrid} ${priceInValencia} ${priceInCadiz}`);