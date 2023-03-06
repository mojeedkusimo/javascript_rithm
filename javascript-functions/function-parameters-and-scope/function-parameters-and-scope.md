## Exercises
### Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

```javascript
add(2,2); // 4
subtract(2,2); // 0
multiply(2,2); // 4
divide(2,2); // 1
```
### Ans: See function-parameters-and-scope.html, line 12

### Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

```javascript
// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"

```
### Ans: See function-parameters-and-scope.html, line 36

### Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

```javascript
average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15
```
### Ans: See function-parameters-and-scope.html, line 44

### Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

```javascript
createStudent("Elie", "Schoppik");
/*
{
    firstName: "Elie",
    lastName: "Schoppik"
}
*/
createStudent("Tim", "Garcia");
/*
{
    firstName: "Tim",
    lastName: "Garcia"
}
*/
```
### Ans: See function-parameters-and-scope.html, line 56

### Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students

```javascript
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

// your students array should contain three objects each with the keys of firstName and lastName. If they do not - make sure you correctly implement the createStudent function from above!
```
### Ans: See function-parameters-and-scope.html, line 65

### Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

```javascript
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false
```
### Ans: See function-parameters-and-scope.html, line 74

### Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

```javascript
extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]
```

### Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

```javascript
countEvensAndOdds([1,2,3,4]);
/*
 {
    oddCount:2,
    evenCount:2
 }
*/
countEvensAndOdds([1,2,3,4,5,6,7]);
/*
 {
    oddCount:4,
    evenCount:3
 }
*/
```

### In the following example, what will be printed in the console? Make sure you first try read this code before pasting it into the console :)

```javascript
let mylet = "Hello from global";

function scopePractice() {
   let mylet = "Hello from function scope";
}

scopePractice();
console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);
```

## Optional Bonus

### Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

```javascript
onlyCapitalLetters("Amazing") // "A"
onlyCapitalLetters("nothing") // ""
onlyCapitalLetters("EVERYTHING") // "EVERYTHING"