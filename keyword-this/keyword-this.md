### Part 1

### What is the value of the keyword this in the following example:
```js
var data = this;
console.log(data);
```
### What does this function output? Why?
### Ans: window object
### Why: This has to deal with the first rule, i.e. Outside a declared object the default value of 'this' is the window object

```js
function logThis(){
    return this;
}

logThis(); // ?
```
### What does this function output? Why?

```js
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi() // ?
```
### What does this function output? Why?

```js
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() // ?
```
### What does this function output? Why?

```js
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() // ?
```

### What does this function output? Why?
```js
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here?
```