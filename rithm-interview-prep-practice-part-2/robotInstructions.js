function robotInstructions(array) {
 // add whatever parameters you deem necessary - good luck!

 let direction = {
    U : 0,
    D : 0,
    L : 0,
    R : 0
 }

 for (let i = 0; i < array.length; i++) {
    direction[array[i]]++;

 }

 return direction;
}

