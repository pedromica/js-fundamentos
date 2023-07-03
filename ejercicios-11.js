console.log('-------------Ejercicio-11----------------------')

//! Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const promedioStrings = (array) => {
let suma = 0;
let contador= 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            suma += array[i];
            contador++;
        }else if (typeof array[i] === 'string'){
            suma += array[i].length;
            contador++;
        }
        
    }

    return suma / contador
}

const promedio = promedioStrings(mixedElements);
console.log(promedio);