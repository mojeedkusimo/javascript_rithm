### countdown
### Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

```javascript
countDown(4);
// 3
// 2
// 1
// "DONE!"
```
### Ans: See  higher-order-functions-timers-closures.html, line 13

### randomGame
### Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.
### Ans: See  higher-order-functions-timers-closures.html, line 30

### isEven
### Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

```javascript
isEven(2); // true
isEven(3); // false
```
### Ans: See  higher-order-functions-timers-closures.html, line 43

### isOdd
### Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

```javascript
isOdd(3); // true
isOdd(14); // false
```
### Ans: See  higher-order-functions-timers-closures.html, line 50

### isPrime
### Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

```javascript
isPrime(8); // false
isPrime(17); // true
```
### Ans: See  higher-order-functions-timers-closures.html, line 57

### numberFact
### Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

```javascript
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true
```
### Ans: See  higher-order-functions-timers-closures.html, line 69

### find
### Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

```javascript
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined
```
### Ans: See  higher-order-functions-timers-closures.html, line 74

### findIndex
### Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

```javascript
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined
```
### Ans: See  higher-order-functions-timers-closures.html, line 84


### specialMultiply
### Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

```javascript
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 
```