## Part I
### Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

### 1. 2 == "2";
### Ans: true

### 2. 2 === 2;
### Ans: true

### 3. 10 % 3;
### Ans: 1

### 4. 10 % 3 === 1;
### Ans: true

### 5. true && false;
### Ans: false

### 6. false || true;
### Ans: true

### 7. true || false;
### Ans: true

## Part II
### Answer the following questions about this code block:

```javascript

let isLearning = true;

if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

```
### What should the above code console.log?
### Ans: Keep it up!

### Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
### Ans: By default, JavaScript tries to coerce whatever expression is passed inside the if statement. Also, it works on its because JavaScript would first resolve the variable to know its actual value. After which, it checks if it is a boolean value; if it is, the corresponding condition is executed and if it is not a boolean value, JavaScript would coerce the value to get the equivalent boolean value based on the rules of coercion and then execute the corresponding condition appropriately.

```javascript

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
```

### What should the above code console.log? Why?
### Ans: third. This is because the first two conditions evaluate to false, thus, they would not get executed. i.e condition 1 >> undefined = false, condition 2 >> undefined (false) || "" (false) = false.

### What is the value of firstvariable when it is initialized?
### Ans: undefined

### Is the value of firstvariable a "truthy" value? Why?
### Ans: No. This is because it is one of the falsy values in JavaScript

### Is the value of secondvariable a "truthy" value? Why?
### Ans: No. This is because it is one of the falsy values in JavaScript

### Is the value of thirdvariable a "truthy" value? Why?
### Ans: Yes. This is because it is NOT one of the falsy values in JavaScript

## Part III
### Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
### Ans: See index3.html

### What is a falsey value? List all the falsey values in JavaScript.
### Ans: These are values in JavaScript which when coerced return false
### 1. 0, 2. undefined, 3. false, 4. "", 5. null, 6. NaN