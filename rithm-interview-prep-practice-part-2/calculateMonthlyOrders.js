function calculateMonthlyOrders(array) {
  // add whatever parameters you deem necessary - good luck!

  let ordersSum = 0;

  for (let i = 0; i < array.length; i++) {

    for (key in array[i]) {
      ordersSum += array[i][key];
    }

  }

  return ordersSum;

}

