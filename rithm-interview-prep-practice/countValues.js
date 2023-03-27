// add whatever parameters you deem necessary - good luck!
function countValues(array, num){

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            count += 1;
        }
    }

    return count;
} 