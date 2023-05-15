function scheduleCheck(obj1, obj2) {
  // add whatever parameters you deem necessary - good luck!

  let counter = 0;

  for (key in obj1) {

    if ( obj1[key] == obj2[key] ) {
      counter++;
    }
  }

  return counter;
}

