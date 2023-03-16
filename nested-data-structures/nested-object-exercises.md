## Given the following nested object:

```javascript
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        nestedData.innerData.snacks.push(snack);
        return nestedData.innerData.snacks;
    }
  }
}
```

### Using a for loop, console.log all of the numbers in the primeNumbers array.
### Ans: See nested-object-exercises.html, line 29

### Using a for loop, console.log all of the even Fibonnaci numbers.
### Ans: See nested-object-exercises.html, line 36

### Console.log the value "second" inside the order array.
### Ans: See nested-object-exercises.html, line 44

### Invoke the addSnack function and add the snack "chocolate".
### Ans: See nested-object-exercises.html, line 48
