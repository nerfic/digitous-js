// 01 - Alphabet

function sortLetters(string) {

    var stringToArray = string.split("");
    var ArrayToAlpha = stringToArray.sort();
    var AlphaToString = ArrayToAlpha.join('')
    return AlphaToString

}
var string = "konexio"

console.log(sortLetters(string))
console.log("\x1b[33m%s\x1b[0m", "--------------");



// 02 - XOXO

function countEach(string) {

    var countX = 0;
    var countO = 0;
    var i = 0;

    while (i <= string.length) {

        if (string[i] == "x") {
            countX++;
        } else if (string[i] == "o") {
            countO++;
        }
        i++;
    }

    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

var testCountEach1 = "xxxoooox"
var testCountEach2 = "xox"
console.log(countEach(testCountEach1))
console.log(countEach(testCountEach2))
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