var i = 0;
console.log("boucle while =")
while (i < 10) {
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice)
    i++;
}

console.log("--------------------")
////////////////////////////////////////////

console.log("boucle for =")


var result = 0;

for (var i = 0; i < 10; i++) {
    var dice = Math.floor(Math.random() * 6) + 1;
    result = result + dice;
    console.log(dice)
}
console.log('resultat ', result)

////////////////////////////////////////////

var add = 0;
for (var i = 25; i <= 75; i++) {
    console.log(`${add} + ${i} = `, add + i)
    add = add + i;
}
console.log('--------------- ')
////////////////////////////////////////////

var multi = 1;
for (var i = 10; i <= 15; i++) {
    console.log(`${multi} * ${i} = `, multi * i)
    multi = multi * i;
}
console.log('--------------- ')
////////////////////////////////////////////

var paire = 0;

for (i = 0; i <= 100; i += 2) {
    console.log(`${paire} + ${i} =`, paire + i)
    paire = paire + i;
}
console.log('--------------- ')
////////////////////////////////////////////

var i = 0;

while (i <= 1000) {
    if (i % 7 === 0) {
        console.log(i)
    }
    i++;
}