// add whatever parameters you deem necessary - good luck!
function stringIndexOf(word, char){

        for (let i = 0; i < word.length; i++) {
            if (word[i] == char) {
                return i;
            }
        }
        return -1;
}