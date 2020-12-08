// 01 - Number

var integer = 102;
var float = 13.9;
console.log(`Integer = ${integer}, Float = ${float}`);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - Convert

var basic = 34;
var stringified = `${basic}`;
console.log(stringified);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Round

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 04 - Arithmétique 

var test = 12;
var bis = 5;

console.log(`${test} + ${bis} =`, test + bis);
console.log(`${test} - ${bis} =`, test - bis);
console.log(`${test} * ${bis} =`, test * bis);
console.log(`${test} / ${bis} =`, test / bis);
console.log(`${test} % ${bis} =`, test % bis);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 05 - Comparaison

var test = 143;
var bis = 219;

console.log(`${test} > ${bis} =`, test > bis);
console.log(`${test} >= ${bis} =`, test >= bis);
console.log(`${test} < ${bis} =`, test < bis);
console.log(`${test} <= ${bis} =`, test <= bis);
console.log(`${test} == ${bis} =`, test == bis);
console.log(`${test} === ${bis} =`, test === bis);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 06 - Condition

var limit = 50;
var score = 40;

if (score >= limit) {
    console.log('Ok good!');
} else {
    console.log('Oh nooo...');
}

console.log("\x1b[33m%s\x1b[0m", "-------");

// 07 - Condition 2

var password = "azerty";

if (password.length > 5) {
    console.log("The password is secure");
}
console.log("\x1b[33m%s\x1b[0m", "-------");

// 08 - Condition 3

if (password.length > 5 && score >= limit) {
    console.log('Everything is good')
} else if (password.length > 5 || score >= limit) {
    console.log('Something is good')
} else {
    console.log('Nothing is good')
}
