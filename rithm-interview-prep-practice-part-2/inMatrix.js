function inMatrix(array, num) {
 // add whatever parameters you deem necessary - good luck!

 for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] == num) {
            return true;
        }
    }
 }
 return false;
}

