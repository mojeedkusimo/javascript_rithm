function sumEvenArguments() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] % 2 == 0) {
            sum += arguments[i];
        }
    }

    return sum;
}