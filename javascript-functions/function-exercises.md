## Your assignment is to write the following functions in the descriptions below - good luck!

## Part 1
### difference
### this function takes in two parameters and returns the difference of the two;

```javascript
difference(2,2); // 0
difference(0,2); // -2
```
### Ans: See function-exercises.html, line 14

### product
### this function takes in two parameters and returns the product of the two;

```javascript
product(2,2); // 4
product(0,2); // 0
```
### Ans: See function-exercises.html, line 21

### printDay
### this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

```javascript
printDay(4); // "Wednesday"
printDay(41); // undefined
```
### Ans: See function-exercises.html, line 28


### lastElement
### this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

```javascript
lastElement([1,2,3,4]); // 4
lastElement([]); // undefined
```
### Ans: See function-exercises.html, line 63

### numberCompare
### this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

### Ans: See function-exercises.html, line 70

```javascript
numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"
```

### singleLetterCount
### this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

```javascript
singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2
```
### Ans: See function-exercises.html, line 75

### Part 2
### multipleLetterCount
### this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

```javascript
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
```
### Ans: See function-exercises.html, line 85

### arrayManipulation
### this function should take in at most four parameters (an array, command, location, and value).
### If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
### If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
### If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
### If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

```javascript
arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
```
### Ans: See function-exercises.html, line 100

### isPalindrome
### A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

```javascript
isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false
```
### Ans: See function-exercises.html, line 123

### Part 3
### Rock / Paper / Scissor
### using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.