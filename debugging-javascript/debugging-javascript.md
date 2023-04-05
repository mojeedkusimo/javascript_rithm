### What does the throw keyword do?
### Ans: The throw keyword is used to return an error during the execution/running of an application and possibly stop the process.

### What does the finally keyword do?
### Ans: The finally keyword is used in conjuction with the try/catch statement. The code written in this block gets executed whether or not an error is caught in the try/catch block

### What is the difference between a TypeError and ReferenceError?
### Ans: the ReferenceError message occurs when a variable that is used is not defined or not declared before usage while the TypeError occurs when the variable defined is used to perform an action that is invalid on the variable type.

### How do you create a snippet in the Chrome dev tools?
### Ans: By naviagting to the 'Source' tab and clicking on 'Snippets' in the sub-section on the left-hand side.

### In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
### Ans: An exception is simply an unexpected behaviour in an apllication.

### How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
### Ans: This is done using the try/catch statement. e.g. 

```javascript
 try {
    let x = Math.random();
    if (x < 0.2) {
        throw "x is too small"
    }
} catch(e) {
    console.log(e);
}

```
### Explain what type of error will be thrown, why the error is occuring, and how to fix it:

```javascript
// 1.

person;

### Ans: ReferenceError
### Solution: person should be declared. i.e let person;

// 2.

let data = {};
data.displayInfo();

### Ans: TypeError
### Solution: displayInfo function should be defined. i.e let data = {displayInfo: () {...}};

// 3.

let data = {};
data.displayInfo.foo = "bar";

### Ans: TypeError
### Solution: displayInfo object should be created. i.e let data = {displayInfo: {}};


// 4.

function data(){
    let thing = "foo";
}
data();
thing;

### Ans: ReferenceError
### Solution: thing should be declared outside the data function. i.e let thing;
```


### Part II
### Fix the broken code and explain what was wrong:

```javascript
1.

for(let i=0; i > 5; i++){
    console.log(i);
}

// Problem: The loop is not going to run because the boundary i > 5 will always return false and never true

// Fix:

for(let i=0; i < 5; i++){
    console.log(i);
}

2.

function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

// Poblem: The expression if(num % 2 = 0) is incorrect as it is an attempt to assign remainder of 'num' divded by 2 to zero which is syntax error (Invalid left-hand side in assignment) instead of comparing the value of 'num' divded by 2 to zero

// Fix:

function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

3.

function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}

// Problem: This is a syntax error. A comma (,) is found in separating the conditions of looping instead of a semi-colon (;)

// Fix:

function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}

4.

function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8]

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.

// Problem 1: There is syntax error similar to Question 2 i.e Invalid left-hand side in assignment --- if(numbers % 2 = 0)---
// Problem 2: There is syntax error because a semi-colon (;) is put where its supposed to appear --- for(...i++;)---
// Problem 3: It is value of the iterator --i-- that is getting pushed to evenNumbers array instead of the element at the index position 'i' which is what is intended ---evenNumbers.push(i);-----------
// Problem 4: Only one item gets pushed to the evenNumbers array of the return statement inside the for loop block, thus the execution stops after the first iteration.
// Problem 5: The iteraion does not get to the last element in the numbers array because of the boundary condition set in the for loop ---for(... i<numbers.length-1; ...)------
// Problem 6: The item of comparism in the if statement is the whole numbers array instead of each element in the numbers array ---if(numbers % 2 = 0)---
// Problem 7: There is a semi-colon (;) at the end of the if statement parenthesis ( and ) ----if(...); {----. This should not be there as the if statement operation gets terminated at that point and anything afterwards becomes a separate statement.

// Fix:
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
        return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8]

```