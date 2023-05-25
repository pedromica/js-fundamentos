var myName = 'Pedro Miguel';

function changeMyName (newName) {
    myName = newName;
}

function sayMyName() {
    console.log (`Mi nombre es ${myName}`)
};

changeMyName('Perico');
sayMyName();


// Todo siempre en cosnt a menos que queramos reasignar con let, let usamos para que una variable se pueda reagsignar.

// * Podemos usar en su lugar para mejorar el código:

// let => La variable creada es reasignable e intenta no ser global

// const => La variable creada NO es reasignable e intenta no ser global

