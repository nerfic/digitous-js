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
console.log("\x1b[33m%s\x1b[0m", "-------");

// Bonus

var random = Math.floor(Math.random() * 6) + 1;
if (random === 6) {
    console.log('Yes I win!', random);
} else {
    console.log('So close...', random);
}

console.log("\x1b[33m%s\x1b[0m", "-------");

var month = "Aout";

switch (month) {
    case 'Décembre':
    case 'Janvier':
    case 'Février':
        console.log("C'est l'hiver");
        break;
    case 'Mars':
    case 'Avril':
    case 'Mai':
    case 'Juin':
        console.log("C'est le printemps");
        break;
    case 'Juillet':
    case 'Aout':
    case 'Septembre':
        console.log("C'est l'été");
        break;
    case 'Octobre':
    case 'Novembre':
        console.log("C'est l'automne")
    default:
        console.log("Ce n'est pas un mois! (en français et avec une maj)")
}
// decembre, janvier, février = hiver
// mars, avril, mai, juin = printemps
// juillet, aout, septembre = été
// octobre, novembre = automne

console.log("\x1b[33m%s\x1b[0m", "-------");

function ft_round(number) {

    var numberToString = `${number}`;
    var tab = numberToString.split('.')
    var tabResult;

    if (tab[1] >= 5) {
        return tabResult = parseInt(tab[0]) + 1;
    }
    else if (tab[1] < 5)
        return tab[0];

}

console.log(ft_round(4.8));
