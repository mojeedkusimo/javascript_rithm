// add whatever parameters you deem necessary - good luck!
function multiples(num1, num2){

    let array = [];

    for (let i = 1; i < num2 + 1; i++) {

        let x = num1 * i;

        array.push(x);
    }

    return array;
}