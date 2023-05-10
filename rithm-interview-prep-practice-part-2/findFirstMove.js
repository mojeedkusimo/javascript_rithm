function findFirstMove(array, char) {
  // add whatever parameters you deem necessary - good luck!

  let coordinate = [];

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {

      if (char == array[i][j]) {
        coordinate.push(i);
        coordinate.push(j);
      }
    }
  }

  if (coordinate.length) {
    return coordinate;
  }
  return -1;
}
