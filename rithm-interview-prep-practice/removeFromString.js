// add whatever parameters you deem necessary - good luck!
function removeFromString(string, start, count){

    let newStr = "";

    for (let i = 0; i < string.length; i++) {
        if (i >= start && count > 0) {
            count--;
            continue
        } else {
            
        newStr+= string[i];
        }
    }

    console.log(newStr);
    return newStr;
    
}