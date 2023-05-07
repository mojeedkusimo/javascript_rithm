function countValidNumsInString(str) {
  // add whatever parameters you deem necessary - good luck!

  let numberCount = 0;

  for (let i = 0; i < str.length; i++) {

    if (!isNaN(str[i])) {
      numberCount++;
    }
  }

  return numberCount;
}
