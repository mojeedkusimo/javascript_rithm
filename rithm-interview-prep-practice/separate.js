// add whatever parameters you deem necessary - good luck!
function separate(array){

    let separateArray = [];

    const populate = (item) => {

        for (let i = 0; i < array.length; i++) {

            if (array[i] == item) {
                separateArray.push(array[i]);
            }
        }
    }

    populate('cat');
    populate('water');
    populate('dog');

    return separateArray;
}