function sumEvenArguments() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] % 2 == 0) {
            sum += arguments[i];
        }
    }

    return sum;
}

function arrayFrom(array) {

    let realArr = [];

    for (let i = 0; i < array.length; i++) {
        realArr.push(array[i]);
    }

    return realArr;

}

function invokeMax(func, num) {

    let counter = 0;

    return function () {
        counter++;

        if (counter > num) {
            return "Maxed Out!";
        }
        
        return func;
    }
}

function guessingGame(amount) {

    let anwser = Math.random() * 10;

    let guesses = 0;

    return function (guess) {

        if (guesses > amount) {
            return "You are all done playing!";
        } else if (guess > anwser) {
            return "You're too high!";
        } else if (guess > anwser) {
            return "You're too low!";
        }

        guesses++;
    }

}