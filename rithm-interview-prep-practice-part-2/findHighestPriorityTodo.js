function findHighestPriorityTodo(array) {
  // add whatever parameters you deem necessary - good luck!

  let priorityAr = [];
  let topPriority = 0;
  let topTask = "";

  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (array[i]["priority"] > topPriority) {
        topPriority = array[i]["priority"];
        topTask = array[i]["task"];
      }
    }
  }

  priorityAr.push(topTask, topPriority);

  return priorityAr;
}
