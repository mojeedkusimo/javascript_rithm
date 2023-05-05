function collectOddsAndEvens(array) {
  // add whatever parameters you deem necessary - good luck!

  let container = {
    odd: 0,
    even: 0
  }

  for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 == 0) {
      container.even++;
    } else {
      container.odd++;
    }
    
  }

  return container;

}

