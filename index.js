
// Problem 1: Let’s play a mind game

function mindGame(number) {
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;


    return subtraction;

}

const total = mindGame(50)

console.log(total);


// -------------------------------------------------------------
// Problem 2: Finding even or odd

function evenOdd(string) {
    const remainder = string.length % 2;
    if (remainder === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

const numbers = evenOdd("this ishasan7")
console.log(numbers);

// -------------------------------------------------------
// Problem 3: Is Less or Greater than seven

function isLGSeven(number) {

    if (number <= 7) {
        const subtractionValue = number - 7;
        if (subtractionValue <= 7) {
            return subtractionValue;
        }
        else {
            const multiplication = subtractionNumbers * 2;
            return multiplication;
        }
    }
    else {
        const multipleValue = number * 2;
        return multipleValue;
    }

}

const totalValue = isLGSeven(-15);
console.log(totalValue);


// ---------------------------------------------------------------------

// Problem 4: Finding Bad data

function findingBadData(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(element < 0){
            count++;
        }
    }
    return count;
}


const dataOfArray = [2, 4, -5, 7, -22, -11, 8, -2, -6, -77, -2];
const negativeDataQuntity = findingBadData(dataOfArray);
console.log(negativeDataQuntity);