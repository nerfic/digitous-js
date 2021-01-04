// 01 - File System

// var fs = require('fs');

// fs.readFile('./jour07.txt', function (error, data) {
//     console.log(data.toString())
// })

// 02 - Map Double

var array = [1, 2, 3, 4, 5];
var double = array.map(function (element) {
    return element + element
})

console.log("Ex 2", double)

// 03 - Map Names

var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];

var shortNames = longNames.map((function (element) {
    return {
        name: element.firstName + " " + element.lastName
    }
}))

console.log("Ex 3", shortNames)

// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];

var numbers = array.filter(function (element) {
    if (typeof (element) === "number") {
        return element
    }
})

console.log("Ex 4", numbers)

// 05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var even = numbers.filter(function (element) {
    if (element % 2 === 0) {
        return element
    }
})

console.log("Ex 5", even)

// 06 - Cakes

var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
];

var soldOut = cakes.map(function (element) {
    if (element.flavor === "chocolate") {
        element.status = "Sold Out!"
    }
    return element
})

console.log(soldOut)