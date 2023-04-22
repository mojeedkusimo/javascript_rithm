// add whatever parameters you deem necessary - good luck!
function twoHighest(array) {

    let maxNum = 0;
    let maxIdx = 0;
    let twoHighestNums = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
            maxIdx = i;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (i == maxIdx) {
            twoHighestNums.unshift(array[i]);
        }
    }

    let maxNum2 = 0;
    let maxIdx2 = 0;


    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum2 && maxIdx != i) {
            maxNum2 = array[i];
            maxIdx2 = i;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (i == maxIdx2) {
            twoHighestNums.unshift(array[i]);
        }
    }


    return twoHighestNums;
}