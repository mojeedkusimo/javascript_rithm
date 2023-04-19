// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index){

    if (index == undefined || typeof(collection) == "object" && !Array.isArray(collection)) {
        for (item in collection) {
            if (collection[item] == value) {
                return true;
            }
        }

    } else {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] == value && i >= index) {
                return true;
            }
        }
    }

    return false;
}