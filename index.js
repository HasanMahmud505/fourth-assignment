
// Problem 1: Let’s play a mind game

function mindGame(number) {
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;


    return subtraction;

}

// const total = mindGame(5)

// console.log(total);


// -------------------------------------------------------------
// Problem 2: Finding even or odd

function evenOdd(character) {
    const remainder = character.length % 2;
    if (remainder === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

// const numbers = evenOdd('Batch7')
// console.log(numbers);

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

// const totalValue = isLGSeven(6);
// console.log(totalValue);


// ---------------------------------------------------------------------

// Problem 4: Finding Bad data

function findingBadData(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            count++;
        }
    }
    return count;
}


// const dataOfArray = [2, 4, -5, 7, -22];
// const negativeDataQuntity = findingBadData(dataOfArray);
// console.log(negativeDataQuntity);


// -----------------------------------------------------------------------
// Problem 5: Convert your gems into diamond

function gemsToDiamond(firstFriend, secendFriend, thirdFriend) {
    const firstFriendDiamond = firstFriend * 21;
    const secendFriendDiamond = secendFriend * 32;
    const thirdFriendDiamond = thirdFriend * 43;
    const allFriendDiamond = firstFriendDiamond + secendFriendDiamond + thirdFriendDiamond;
    if (allFriendDiamond >= 1000*2) {
        const totalDiamond = allFriendDiamond - 2000;
        return totalDiamond;
    }
    else {
        return allFriendDiamond;
    }
}


// const gems = gemsToDiamond(1, 1, 1);

// console.log(gems)

