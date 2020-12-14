// 01 - Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}

console.log(cat);
console.log("Valeur de age =", cat.age);

if (cat.isCute === true) {
    console.log("So cute!")
}

console.log("\x1b[33m%s\x1b[0m", "--------------");

// 02 - Combine

var cat2 = {
    name: "Allan",
    age: 22,
    isCute: false,
}
var cats = [cat, cat2];

console.log(cats[0].age)
console.log(cats[1].isCute)

console.log("\x1b[33m%s\x1b[0m", "--------------");

// 03 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// je crée une boucle pour afficher le resultat de 0 à 10 parce que je suis feignant 
for (var i = 0; i <= 10; i++) {
    console.log(`${i} est un nombre paire? ${checkIfEven(i)}`);
}

console.log("\x1b[33m%s\x1b[0m", "--------------");

// 04 - Compare

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} (num1) est plus grand que ${num2} (num2)`);
    }
    else if (num2 > num1) {
        console.log(`${num2} (num2) est plus grand que ${num1} (num1)`);
    } else {
        console.log("both are the same")
    }
}

console.log(compare(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1)))
console.log("\x1b[33m%s\x1b[0m", "--------------");

// 05 - Add Up

function addUp(num) {

    var ancienResult = 0;

    for (var i = 0; i <= num; i++) {
        ancienResult += i;
    }
    return ancienResult;
}

console.log(addUp(12))
console.log("\x1b[33m%s\x1b[0m", "--------------");

// 06 - Time

function format(num) {

    var hours = Math.floor(num / 3600);
    var minutes = Math.floor((num - (hours * 3600)) / 60);
    var seconds = num - (hours * 3600) - (minutes * 60);
    var hhmmss = `${hours}:${minutes}:${seconds}`
    return hhmmss;
}

console.log(format(3700))
console.log("\x1b[33m%s\x1b[0m", "--------------");

// Bonus 1

function generatePassword(num) {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    var i = 0;
    var error = "Error";

    while (i < num) {
        result = result + char.charAt(Math.round(Math.random() * char.length))
        i++
    }
    if (result.length < 6 || result.length > 15) {
        return error;
    } else {
        return result;
    }
}

for (var j = 3; j <= 18; j++) {
    console.log(`Mot de passe de ${j} caractères: ${generatePassword(j)}`);
}
console.log("\x1b[33m%s\x1b[0m", "--------------");

// Bonus 2 

function launchDice(numberOfDice) {
    var i = 0;
    var dice = null;
    var result = 0;

    while (i < numberOfDice) {
        dice = Math.floor(Math.random() * 6 + 1)
        result = result + dice;
        i++;
    }
    return result;
}

var numberOfDice = 10;
var player1 = launchDice(numberOfDice);
var player2 = launchDice(numberOfDice);

if (player1 > player2) {
    console.log(`Player 1 (${player1}) est supérieur à Player 2 (${player2})`)
} else if (player2 > player1) {
    console.log(`Player 2 (${player2}) est supérieur à Player 1 (${player1})`)
} else {
    console.log(`Egalité parfaite! player1 = ${player1}, player2 = ${player2}`)
}