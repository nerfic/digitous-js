// 01 - Hello World

console.log("Hello World");
console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - String

var test = "My name is Allan";
console.log(test);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Concatenation

var name = "Allan";
console.log(`Nice to meet you ${name}`);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 04 - String Length

var testLength = "I'm very long !";
console.log("Longueur de testLength =", testLength.length);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 05 - Replace

var food = "croissant is meh";
console.log(food.replace("meh", "so good"));
console.log("\x1b[33m%s\x1b[0m", "-------");

// 06 - Up and Down

var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(`basic = ${basic}, basicUp = ${basicUp}, basicDown = ${basicDown}`);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 07 - Split

var word = "banana";
var letters = word.split()
console.log("My tab =", letters);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 08 - Template

var age = "22";
var template = `I'm ${age} years old`;
console.log(template);
console.log("\x1b[33m%s\x1b[0m", "-------");

// Bonus

console.log("Bonus:")
console.log(`Substring de \"${basic}\" =`, basic.substring(5, 7)); // Substring
console.log('Echappement de caractère = Aujourd\'hui on est le 07/12, ma citation du jour est \"La vie est trop courte pour avoir peur\"') // Echappement caractère