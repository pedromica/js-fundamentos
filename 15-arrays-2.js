//Calculamos la media de una colección de notas

const getAverage = (scores) => {
    let sum = 0;

    for (let i = 0; i < scores.length; i++){
        const score = scores[i];
        sum = sum + score;
        //! sum += score.
    }
    
    return sum / scores.length;
}

const marks = [10, 4, 6, 9, 4, 6, 1];
const average = getAverage(marks)
console.log(`La media de las notas es: ${average}`);

//Filtrar los números que sean pares
const getEvenNumber = (numbers) => {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i]
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    
    return [evenNumbers];

};

const evenNumbers = getEvenNumber([1, 2, 3, 4, 5, 6, 10, 9, 7, 8]);
console.log(`Los números pares son:`, evenNumbers);
