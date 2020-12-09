// 01 - Array

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - Access

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients.indexOf("butter"));
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Add and Remove

var objects = ["pen", "book", "lamp"];
console.log("Afficher objects", objects);
objects.unshift("chair");
console.log("Ajouter chair au début du tableau", objects);
objects.pop("lamp");
console.log("Supprimer lamp du tableau", objects);
objects.push("laptop");
console.log("Ajouter laptop a la fin du tableau", objects);
objects.pop("chair");
console.log("Supprimer chair du tableau", objects);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 04 - Order

var numbers = [4, 10, 8, 12, 6];
console.log("Tableau à l'origine", numbers);
console.log("Tableau à l'envers", numbers.reverse());
console.log("Tableau ordre croissant", numbers.sort((a, b) => a - b));
console.log("\x1b[33m%s\x1b[0m", "-------");


// 05 - Boucle

var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++) {
    total = i;
}

console.log("Valeur de total now:", total);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 06 - Reverse

function reverse(str) {

    var reverseString = "";
    var i = str.length - 1;
    console.log(i)
    while (i >= 0) {
        reverseString = reverseString + str[i];
        i--;
    }
    return reverseString;
}

console.log(reverse("Hello Konexio !"))

// Bonus 1

var i = 0;

while (i <= 100) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizzbuzz");
    }
    else if (i % 3 === 0) {
        console.log(i, "fizz");
    }
    else if (i % 5 === 0) {
        console.log(i, "buzz");
    }
    else if (i % 7 === 0) {

    }
    else {
        console.log(i);
    }
    i++;
}

console.log("\x1b[33m%s\x1b[0m", "-------");

// Bonus 2

var total2 = 0;
var limit2 = 10;
var i = 0;

while (total2 < limit2) {
    total2++;
}
console.log(total2)
console.log("\x1b[33m%s\x1b[0m", "-------");

// Bonus 3

const studentListe = ["Ahmed", "Atif", "Elisabeth", "Ewa", "Houra", "Allan"];
// var randomStudent = Math.floor(Math.random() * student.length);
// console.log(randomStudent, student[randomStudent])


function randomStudent(liste) {

    var randomStudents = Math.floor(Math.random() * liste.length);

    while (liste[randomStudents] === "Allan") {
        var randomStudents = Math.floor(Math.random() * liste.length);
    }
    console.log(liste[randomStudents])
}

console.log(randomStudent(studentListe))
console.log("\x1b[33m%s\x1b[0m", "-------");

// Bonus 4


var tab = [];

for (var i = 1; i <= 20; i++) {
    tab.push(Math.floor(Math.random() * 100))
}
console.log("Mon tableau aléatoire:", tab)


function arrayMax(array) {
    var arrayLen = array.length;
    var max = null;
    while (arrayLen != 0) {
        if (array[arrayLen] > max) {
            max = array[arrayLen];
        }
        arrayLen--;
    }

    return max;
}

console.log(arrayMax(tab))