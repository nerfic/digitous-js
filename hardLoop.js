// 01 - Sum

var number = [];
var result = 0;

for (var i = 0; i < 50; i++) {
    var dice = Math.floor(Math.random() * 100)
    number.push(dice);
}

console.log(number)

for (var j = 0; j < 50; j++) {
    console.log(`${result} + ${number[j]} = ${result + number[j]}`)
    result += number[j];
}
console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - Max

number = [];
var max = 0;
for (var i = 0; i < 50; i++) {
    var dice = Math.floor(Math.random() * 150 + 50)
    number.push(dice);
}

for (var j = 0; j < 50; j++) {
    if (number[j] > max) {
        max = number[j]
    }
}

console.log('Mon tableau', number);
console.log('La valeur max de mon tableau', max);
console.log('La valeur max de mon tableau avec Math max', Math.max(...number));
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Unique

number = [];

for (var i = 0; i < 50; i++) {
    var dice = Math.floor(Math.random() * 150 + 50)
    number.push(dice);
}

console.log(number)

var j = 0;
var firstElement = 0;

while (j <= 50) {
    if (number[j] >= 75 && number[j] <= 100) {
        firstElement = number[j];
        break;
    }
    j++
}

console.log(firstElement)
console.log("\x1b[33m%s\x1b[0m", "-------");

// 04 - Nested Loop

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var count = 0;
var words2 = 0;
var letterToSearch = "o";

for (var i = 0; i < words.length; i++) {
    words2 = words[i].split('');

    for (var j = 0; j < words2.length; j++) {
        if (words2[j] === letterToSearch) {
            console.log(`J'ai trouvé un ${letterToSearch} :)`)
            count++;
        }
    }
}
console.log(`Le nombre total de ${letterToSearch} est ${count}`)