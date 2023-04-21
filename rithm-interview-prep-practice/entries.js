// add whatever parameters you deem necessary - good luck!
function entries(obj){

    let array = [];

    for (keys in obj) {
        let subArray = [];

        subArray.push(keys);
        subArray.push(obj[keys]);
        array.push(subArray);
    }

    return array;

}