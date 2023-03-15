## Exercises

```javascript
let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
```

### Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

```javascript
displayCities();
// "Seattle"
// "Providence"
// "New York"
```
### See nested-objects.html line 32

### Write a function called displayHometownData that console.logs all the values inside of the hometown object

```javascript
displayHometownData();

// "West Orange"
// "NJ"
```

### See nested-objects.html line 42

### Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

```javascript
addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
```
### See nested-objects.html line 50

### Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

```javascript
removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
```

### See nested-objects.html line 50