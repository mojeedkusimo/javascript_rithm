### Exercises
### Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

```js
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");

// ["Elie", "Tim", "Matt"]
```
### Ans: See reduce.html, line 14

### Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

```js
filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1

```
### Ans: See reduce.html, line 22

### Optional Bonus

### Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

```js
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/
```

### Ans: See reduce.html, line 33