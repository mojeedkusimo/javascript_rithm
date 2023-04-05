### Exercises
### Answer the following questions:

### What is the difference between setInterval and setTimeout?
### Ans: setInterval is used when a function passed is to be called at intervals say 5secs, while setTimeout is used when a functioned passed is only called after a speficied time once.

### What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
### The JavaScript engine treats setInterval as an asynchronous event while loops are synchronous events. I would prefer to use a loop since in most cases, the intended loop is to executed immediately.

### What is the first parameter that setInterval and setTimeout accept?
### Ans: They both accept a function (i.e a callback) as their first parameter.

### Why is it so important to store the result of setInterval and setTimeout in a variable?
### Ans: This is so that, they can easily be terminated using clearTimeout and clearInterval respectively with their corresponding IDs.

### What does asynchronous mean in the context of setTimeout and setInterval?
### Ans: It simply means an action or event that are to be executed at a later specified time.