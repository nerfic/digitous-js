// 01 - Somme des carrés

for (var i = 5; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - Comptons

var multipleOfSeven = 0;

for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        multipleOfSeven++
    }
}

console.log(multipleOfSeven)
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Chanceux

for (var i = 0; i <= 20; i++) {
    var dice = Math.floor(Math.random() * 6 + 1);
    if (dice >= 5) {
        console.log(dice)
    }
}