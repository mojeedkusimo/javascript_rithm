// add whatever parameters you deem necessary - good luck!
function max(array){

    let maxNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
}