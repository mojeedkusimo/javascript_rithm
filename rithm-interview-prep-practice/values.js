// add whatever parameters you deem necessary - good luck!
function values(obj){

    let objArray = [];

    for (key in obj) {
        objArray.push(obj[key]);
    }
    return objArray;
}