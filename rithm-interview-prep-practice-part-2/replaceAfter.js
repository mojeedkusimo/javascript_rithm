function replaceAfter(array, num) {
  // add whatever parameters you deem necessary - good luck!

  for (let i = 0; i < array.length; i++) {
    if (i == num) {
      array[i] = "Hello";
      array[i + 1] = "world";
    }
  }

  return array;
}
