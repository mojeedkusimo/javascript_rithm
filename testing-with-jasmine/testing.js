function replaceWith(str, oldChar, newChar) {

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

function expand(array, count) {

    let newArray = [];

    for (let i = 0; i < count; i++) {

        // for (let j = 0; j < array.length; j++) {
        //     newArray.push(array[j]);
        // }
        newArray = newArray.concat(array);
    }

    return newArray;

}

function acceptNumbersOnly() {

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number" || `${arguments[i]}` === "NaN") {
            return false;
        }
    }

    return true;

}

function mergeArrays(arr1, arr2) {

    function compareNumbers(a, b) {
        return a - b;
    }

    return arr1.concat(arr2).sort(compareNumbers);

}


function mergeObjects(obj1, obj2) {

    let newObj = {};

    for (key in obj1) {
        newObj[key] = obj1[key];
    }

    for (key in obj2) {
        newObj[key] = obj2[key];
    }

    return newObj;

}