// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj){

    let array = [];

    for (key in obj) {
        array.push(Number(key));
    }

    let maxNum = 0;
    let diffArray = [];
    let maxDif = 0;
    let maxDifIdx = 0;
    let minNum = 0;
    let minMaxArr = [];

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

    minMaxArr.push(minNum);
    minMaxArr.push(maxNum);

    return minMaxArr;

}