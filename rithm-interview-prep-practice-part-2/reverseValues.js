function reverseValues(array) {
    
  // add whatever parameters you deem necessary - good luck!

  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 == 0) {
        i+=2;
      continue;
    } else {
      newArray.unshift(array[i]);
    }
  }

  return newArray;
}