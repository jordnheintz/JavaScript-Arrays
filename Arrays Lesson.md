![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Arrays

# Table of Content

- [Javascript Arrays](#javascript-arrays)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
    - [Arrays](#arrays)
      - [Accessing Arrays](#accessing-arrays)
      - [Changing an Array Element](#changing-an-array-element)
      - [The length Property](#the-length-property)
      - [Arrays within Arrays](#arrays-within-arrays)
      - [Arrays Contain Any Data Type](#arrays-contain-any-data-type)
    - [Array Methods](#array-methods)
      - [Add Elements To An Array](#add-elements-to-an-array)
      - [Removing Elements From An Array](#removing-elements-from-an-array)
    - [Spread Operator](#spread-operator)
  - [Next Steps](#next-steps)

## Objectives

- Define a JavaScript array.
- Understand writing an array.
- Know how to access an array.
- Understand how to add and remove elements from array.
- Array Methods.
- Nesting Arrays.
- Spread operator use.

## About

An array is an ordered collection of related data and are organized by index. Indexing begins at 0 (e.g.,first element in an array has an index of 0, the second has an index of 1, and so on). JavaScript arrays are used to store multiple values in a single variable. It is useful if you have a list of items like a list of cars or people for example.

### Arrays

To create an array, its syntax consists of square brackets surrounding items of any data type and is separated by commas. Spaces and line breaks are not important or detrimental to your code as a declaration can span multiple lines.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
console.log(animals);
```

#### Accessing Arrays

You access an array element by referring to the index number: (**remember its zero based**)

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
console.log(animals[2]);
Output: "reptile";
```

#### Changing an Array Element

This changes the value of the first element in according to index placed in parameter:

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
animals[0] = "chicken";
Output: animals = [
  "chicken",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
```

#### The length Property

The length property of an array returns the length of an array (the number of array elements).

```js
animals = ["dog", "cat", "reptile", "fish", "bird", "bear", "tiger", "lion"];
console.log(animals.length);
Output: 8;
```

#### Arrays within Arrays

You are able to place arrays within arrays. Here, the index [1] represents the array `["apple", "banana", "cheese"]`. The index [2] represents `"fridge"`, the third item in the nested array.

```js
const things = [
  ["apple", "banana", "cheese"],
  ["dish", "eraser", "fridge"],
  ["garage", "helicopter", "internet"],
];
things[1][2];
Output: "fridge";
```

#### Arrays Contain Any Data Type

Arrays can contain any data type, like below where we have an array of objects.

```js
let instructors = [
  { name: "Raymond", location: "District of Columbia", lunch: "Fish" },
  { name: "Roger", location: "Maryland", lunch: "Soup" },
  { name: "Leah", location: "Delaware", lunch: "Sandwhich" },
];
```

### Array Methods

There are a lot of useful methods that come with JavaScript we can use to inspect and modify arrays. I will list some below along with some examples, I challenge you to investigate the rest.

- **push() / .pop()**
- **shift() / .unshift()**
- **indexOf()**
- **reverse()**
- **concat()**
- **join()**
- **sort()**
- **slice()**
- **splice()**

#### Add Elements To An Array

One way to add a new element to an array is using the `push()` method which adds an element at the end of an array.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
animals.push("Whale");
console.log(animals);
Output: [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
  "Whale",
];
```

Another way to add elements to an array is to use the `unshift()` method, this will add an element to the beginning of the array.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
animals.unshift("Whale");
console.log(animals);
Output: [
  "Whale",
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
```

#### Removing Elements From An Array

One way to remove an element from an array is to use the `pop()` method which removes the last element from the array.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
animals.pop();
console.log(animals);
Output: ["dog", "cat", "reptile", "fish", "bird", "bear", "tiger"];
```

Another way to remove an element is to use the `shift()` method, this removes the first element out of the array.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
animals.shift();
console.log(animals);
Output: ["cat", "reptile", "fish", "bird", "bear", "tiger", "lion"];
```

### Spread Operator

The spread operator `...` allows an expression to be expanded into multiple elements allowing for separating an array into individual elements, or items as well as combining/copying arrays.

```js
let animals = [
  "dog",
  "cat",
  "reptile",
  "fish",
  "bird",
  "bear",
  "tiger",
  "lion",
];
let cars = ["tesla", "lexus", "benz", "bmw", "mustang"];
let things = [...animals, ...cars];
console.log(things);
```

## Next Steps

Now that you are familiar with arrays in javascript, head on over to the [Lab](js-arrays-drill.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
