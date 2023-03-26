// add whatever parameters you deem necessary - good luck!
function lastIndexOf(array, num){

    for (let i = array.length; i > -1; i--) {
        if (array[i] == num) {
            return i;
        }
    }
    return -1;
}