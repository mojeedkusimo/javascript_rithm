// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj){

    let str = "";

    for (key in obj) {

        if (str.length == 0) {
            str += `${key} = ${obj[key]}`;
        } else {
            str += `, ${key} = ${obj[key]}`;
        }
    }

    return str;
}