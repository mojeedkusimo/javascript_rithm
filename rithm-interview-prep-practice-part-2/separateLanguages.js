function separateLanguages(array) {
  // add whatever parameters you deem necessary - good luck!

  let resultObj = {
    python: 0,
    javascript: 0,
    other: []
  }

  for (let i = 0; i < array.length; i++) {

    if (array[i] == "python" || array[i] == "javascript") {

      resultObj[array[i]]++;
    } else {
      resultObj.other.push(array[i]);
    }
  }

  return resultObj;
}

