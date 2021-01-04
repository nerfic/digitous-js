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
    if (typeof (element) == "number") {
        return element
    }
})

console.log("Ex 4", numbers)