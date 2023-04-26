// add whatever parameters you deem necessary - good luck!
function isAlt(str){

    const vowelTest = /[aeiou]/ig;
    const vowelArray = ['a','e','i','o','u'];

    for (let i = 0; i < str.length; i++) {

        if (vowelArray.includes(str[i]) == vowelArray.includes(str[i+1]) && str[i+1] != undefined) {
            return false;
        }
    }

    return true;
}