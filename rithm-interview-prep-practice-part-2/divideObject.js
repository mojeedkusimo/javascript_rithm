function divideObject(obj) {
  // add whatever parameters you deem necessary - good luck!

  let numCount = 0;
  let strCount = 0;
  let total = [];

  for (key in obj) {
    if (typeof obj[key] == "string") {
      for (let i = 0; i < obj[key].length; i++) {
        strCount++;
      }
    } else {
      numCount+=obj[key];
    }
  }
  total.push([numCount]);
  total.push([strCount]);

  return total;

}
