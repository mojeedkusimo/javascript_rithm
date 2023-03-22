// add whatever parameters you deem necessary - good luck!
function stringIncludes(word, char){
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) {
            return true;
        }
    }
    return false;
}