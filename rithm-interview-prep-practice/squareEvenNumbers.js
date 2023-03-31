// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(array){

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += Math.pow(array[i],2);
        }
    }

    return sum; 
}