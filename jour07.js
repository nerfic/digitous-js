// 01 - Alphabet

function compare(a, b) {
    console.log(a, b)
    console.log(a.charCodeAt(0))
    console.log(b.charCodeAt(0))

    if (a.toLowerCase().charCodeAt(0) > b.toLowerCase().charCodeAt(0)) {
        return 1;
    }
    else if (a.toLowerCase().charCodeAt(0) < b.toLowerCase().charCodeAt(0)) {
        return -1
    } else {
        return 0;
    }
}


function sortLetters(string) {

    var stringToArray = string.split("");
    var ArrayToAlpha = stringToArray.sort(compare);
    var AlphaToString = ArrayToAlpha.join('')
    return AlphaToString

}
var string = "Konexio"

console.log(sortLetters(string))
console.log("\x1b[33m%s\x1b[0m", "--------------");



// 02 - XOXO

function countEach(string) {

    var countX = 0;
    var countO = 0;
    var i = 0;
    var errorMsg = "Il n'y a pas autant de x que de o "

    while (i <= string.length - 1) {

        if (string[i] == "x") {
            countX++;
        } else if (string[i] == "o") {
            countO++;
        }
        i++;
    }

    if (countX === 0 && countO === 0) {
        return errorMsg;
    }
    else if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

var testCountEach1 = "xxxoooox"
var testCountEach2 = "xox"
var testCountEach3 = "aaaa"
console.log(countEach(testCountEach1))
console.log("\x1b[33m%s\x1b[0m", "-------");
console.log(countEach(testCountEach2))
console.log("\x1b[33m%s\x1b[0m", "-------");
console.log(countEach(testCountEach3))
console.log("\x1b[33m%s\x1b[0m", "--------------");

// 03 - Palindrome

function checkPal(string) {

    var gg = "Palindrome!"
    var loose = "Nope"
    var reverseString = "";
    var i = string.length - 1;

    while (i >= 0) {
        reverseString = reverseString + string[i];
        i--;
    }

    if (reverseString === string) {
        return gg;
    } else {
        return loose;
    }
}

console.log("Racecar =", checkPal("racecar"))
console.log("Laptop =", checkPal("laptop"))

console.log("\x1b[33m%s\x1b[0m", "--------------");

// 04 - Swap

function swap(string) {

    var i = 0;
    var result = "";

    while (i < string.length) {

        if (string[i] === string[i].toUpperCase()) {
            result += string[i].toLowerCase();
        } else if (string[i] === string[i].toLowerCase()) {
            result += string[i].toUpperCase();
        }
        i++;
    }
    return result
}

string = "Hello World";
console.log(swap(string))
console.log("\x1b[33m%s\x1b[0m", "--------------");

// Bonus 1 => Finit

function makeItSpongeBob(string) {

    var i = 0;
    result = "";

    while (i < string.length) {

        if (i % 2 !== 0) {
            result += string[i].toLowerCase();
        } else {
            result += string[i].toUpperCase();
        }
        i++;
    }
    return result;
}

string = "Javascript is easy lol";
console.log(makeItSpongeBob(string))


// Bonus 2 => Finit
// Bonus 3 => Finit