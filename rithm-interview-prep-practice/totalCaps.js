// add whatever parameters you deem necessary - good luck!
function totalCaps(array){

    let capCounter = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].charCodeAt() < 91) {
                capCounter++;
            }
        }
    }

    return capCounter;
}