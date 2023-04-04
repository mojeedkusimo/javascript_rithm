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