function replaceWith(str, oldChar, newChar){

    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == oldChar) {
            newStr += newChar;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

function expand(array, count){

    let newArray = [];

    for (let i = 0; i < count; i++) {

        // for (let j = 0; j < array.length; j++) {
        //     newArray.push(array[j]);
        // }
        newArray = newArray.concat(array);
    }

    return newArray;

}

function acceptNumbersOnly(){

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number" || `${arguments[i]}` === "NaN") {
            return false;
        }
    }

    return true;

}

function mergeArrays(){


    return [];

}