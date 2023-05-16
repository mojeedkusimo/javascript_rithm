function findFirstAndLastIndex(array, num) {
  // add whatever parameters you deem necessary - good luck!

  let occurenceArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      if (occurenceArray.length < 1) {
        occurenceArray.push(i);
      }
      else {
        occurenceArray[1] = i;
      }
    }

  }

  if (occurenceArray.length < 2) {
    return -1;
  }

  return occurenceArray;
}