// add whatever parameters you deem necessary - good luck!
function slice(array, start, end){

    let newArray = [];

    if (end == undefined || end > array.length) {

        for (let i = start; i < array.length; i++){
            newArray.push(array[i]);
        }
        
    } else {
        for (let i = start; i < end; i++){
            newArray.push(array[i]);
        }
    }

    return newArray;
}