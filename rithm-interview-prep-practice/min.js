// add whatever parameters you deem necessary - good luck!
function min(array){

    let minNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    return minNum;
}