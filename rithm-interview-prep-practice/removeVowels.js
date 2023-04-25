// add whatever parameters you deem necessary - good luck!
function removeVowels(str){

    let vowelsArray = ['a','e','i','o','u'];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {

        if (!(vowelsArray.includes(str[i].toLowerCase()))) {
            newStr += str[i];
        }
    }

    return newStr;
}