### Exercises
### Answer the following questions:

### What is a closure?
### Ans: This is a scenario where an inner function is returned and it uses variable(s) declared in the outer function.

### List two reasons why closures are useful
### Ans: i. This can be used for creating private variables ii. It is also used for creating a module.

### What is a module?
### Ans: A module is a piece of code that is grouped together to perform a specific task and also reusable.

### What is the arguments array-like object?
### Ans: This is a collection of parameters passed to a function call.

### Why do we call arguments an array-like-object?
### This is because they are iterable and have certain common properties similar to an array.

### Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

```javascript
let firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

let secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4
```