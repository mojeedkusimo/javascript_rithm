function skipVowels(string) {
  // add whatever parameters you deem necessary - good luck!

  let returnArray = [];
  let vowels = ["a","e","i","o","u"];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      i++;
      continue;
    } else {
      returnArray.push(string[i]);
    }
  }

  return returnArray;
}
