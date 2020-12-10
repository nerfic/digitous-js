// 01 - Comptons 

var i = 50;

while (i <= 200) {
    console.log(i);
    i += 2;
}

console.log("\x1b[33m%s\x1b[0m", "-------");

// 02 - Try again

var dice = null;
var count = 0;

while (dice !== 6) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);
    count++;
}
console.log(`Nombre de dès lancé pour arriver à 6 = ${count}`);
console.log("\x1b[33m%s\x1b[0m", "-------");

// 03 - Course

var ussainBolt = 0;
var tysonGay = 0;

while (ussainBolt < 100 && tysonGay < 100) {
    ussainBolt = ussainBolt + Math.floor(Math.random() * 10 + 1)
    tysonGay = tysonGay + Math.floor(Math.random() * 10 + 1)

    if (ussainBolt >= 100 && tysonGay >= 100) {
        console.log(`Les deux son vainqueurs!`)
    } else if (ussainBolt >= 100) {
        console.log("Usain Bolt Vainqueur = ", ussainBolt)
    } else if (tysonGay >= 100) {
        console.log("Tyson Gay Vainqueur = ", tysonGay);
    }
}

console.log(`Score de Usain Bolt = ${ussainBolt}\nScore de Tyson Gay ${tysonGay}`)
