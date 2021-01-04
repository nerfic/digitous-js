// 01 - File System PAS FINIT

// var fs = require('fs');

// fs.readFile('./jour07.txt', function (error, data) {
//     console.log(data.toString())
// })

// 02 - Map Double

var array = [1, 2, 3, 4, 5];
var double = array.map(function (element) {
    return element + element
})

console.log("Ex 1", double)

// 03 - Map Names PAS FINIT

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

var shortNames = longNames.map((function (acc, element) {
    return acc.firstName + element.lastName
}))

console.log("Ex 2", shortNames)