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