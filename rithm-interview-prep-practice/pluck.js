// add whatever parameters you deem necessary - good luck!
function pluck(array, key){

    let valueArray = [];

    for (let i = 0; i < array.length; i++) {
        valueArray.push(array[i][key]);
    }

    return valueArray;
}