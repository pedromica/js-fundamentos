/* const myName = 'Pedro Miguel'
console.log (`Mi Nombre es: ${myName}`);

const promise = new Promise((resolve, reject) => {
    console.log('Promesa ejecutándose');
 */
    /* resolve('Resuelta!'); */
/*     reject('La promesa se ha roto')
});
promise.then((value) => {
    console.log(`La promsea se ha resuelto con el valor: ${value}`);
}) 

promise.catch((error) => {
    console.log(`${error}`);
})

console.log(promise)
console.log('Este código se ejecuta antes que la Promise!'); */

const getAmountInBank = () => {
    const promise = new Promise((resolve, reject) => {
        resolve(1000000);
        //reject('El servidor no está disponible')
    }); 

    return promise;
};

getAmountInBank().then((amount) => {
    /* console.log(`La cantidad que tenemos en el banco es; ${amount}€`) */;

    return `La cantidad es:${amount}`
})

.then((message) => {
    console.log(message);
} )
.catch((error) => {
    console.log(`Error: ${error}`);
});


