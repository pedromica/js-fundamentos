const person = {
    name: 'Pedro Miguel',
    surname: 'Cánovas',
};

//! Un objeto es una liberia de valores en la que podemos tenerlos organizados en pares de key value.
//! key/value = propiedad

//Dos maneras de entrar al objeto
/* const personaName = person['name']; */ 
/* const personaName = person.name; */

console.log(`El nombre es ${person.name} ${person.surname}`);

person['age'] = 30; //! agrego una propiedad nueva key/value

console.log(`La persona tiene ${person.age} años.`);

//!elimino una propiedad
person['city'] = 'Murcia';
/* delete person.city;   */ //!de las dos maneras se puede eliminar una propiedad
delete person['city']; 
console.log(`La persona vive en ${person.city}`); //!undefined no existe la hemos elinminado.
//!

person['city'] = 'Murcia';
console.log(`La persona vive en ${person.city}`);
person.city = 'Santa Pola';
console.log(`Ahora la persona vive en ${person.city}`); //! modificio la propiedad.
console.log(person);

//!Ejemplo de claves dinámicasa
//!clave dinámica depende de una variable.

function getKey (object, key) {
    return object[key];
}

const dynamicName = getKey (person, 'name');
const dynamicSurname = getKey (person, 'surname'); 

console.log(`Las calves dinámicas valen: ${dynamicName} ${dynamicSurname}`);
