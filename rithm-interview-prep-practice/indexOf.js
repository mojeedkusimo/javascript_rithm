// add whatever parameters you deem necessary - good luck!
function indexOf(array, num){

    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return i;
        }
    }
    return -1;

}