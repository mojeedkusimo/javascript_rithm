function countIfHasValue(obj, num) {
  // add whatever parameters you deem necessary - good luck!

  let counter = 0;

  const isInArray = (array, searchNum) => {

    for (let i = 0; i < array.length; i++) {
      if (array[i] == searchNum) {
        return true;
      }
    }
    return false;
  }
  for (key in obj) {
    if (isInArray(obj[key], num)) {
      counter++;
    }
  }

  return counter;
}

