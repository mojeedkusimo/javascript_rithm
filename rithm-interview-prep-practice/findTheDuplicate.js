// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(array){

    for (let i = 0; i < array.length; i++) {

        if (array.includes(array[i], i+1)) {
            return array[i];
        }
    }

    return undefined;
}