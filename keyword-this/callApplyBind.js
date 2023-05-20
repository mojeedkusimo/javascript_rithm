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