// add whatever parameters you deem necessary - good luck!
function min(array){

    let maxNum = 0;
    let diffArray = [];
    let maxDif = 0;
    let maxDifIdx = 0;
    let minNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }

    for (let j = 0; j < array.length; j++) {
        diffArray.push(maxNum - array[j]);
    }

    for (let k = 0; k < diffArray.length; k++) {
        if (diffArray[k] > maxDif) {
            maxDif = diffArray[k];
            maxDifIdx = k;
        }
    }

    for (let l = 0; l < array.length; l++) {
        if (l == maxDifIdx) {
            minNum = array[l];
        }
    }

    return minNum;
}

// min([5, 1, 4, 7, 1, 2]); // 1
// 1. find the max number ==> 7
// 2. Create an array of the differences between the max number and each number ==> [2,6,3,0,6,5]
// 3. find the max number and index in the difference array ==> 6, 1 or 4
// 4. The index of the value in 3 would correspond to the index of the least (min) number the passed array.