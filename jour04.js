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
