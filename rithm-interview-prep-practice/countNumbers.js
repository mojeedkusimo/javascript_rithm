// add whatever parameters you deem necessary - good luck!
function countNumbers(array){

    let counter = 0;
    let spaceChecker = /\s+/;

    for (let i = 0; i < array.length; i++) {
        
        if (!(isNaN(array[i])) && array[i].length != 0 && !spaceChecker.test(array[i])) {
            counter++;
        }
    }

    return counter;
}