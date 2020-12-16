const { cpuUsage } = require('process');
var prompt = require('prompt');
var colors = require("colors/safe");

var word = ["slack"];
var randomArray = Math.floor(Math.random() * word.length)
var randomWord = word[randomArray]; // Mot généré aléatoirement à partir du tableau word
console.log("Mot aléatoire:", randomWord)
var coup = 1;


function motus() {

    console.log("Voici la première lettre du mot:", randomWord[0])

    if (coup <= 6) {
        var playerResult = randomWord[0];

        prompt.message = colors.cyan.underline("Quel est le mot mystère?");
        prompt.start();
        prompt.get(['word'], function (err, result) {

            playerResult = result.word; // Ce que l'utilisateur me donne
            var i = 0;

            while (i < playerResult.length) {

                var charSearch = playerResult[i]; // item a rechercher

                if (playerResult === randomWord) {
                    console.log(colors.green(`Wow! T'as trouvé le mot mystère ${playerResult} en ${coup} coup(s)`))
                    return;
                } else if (playerResult[i] === randomWord[i]) {
                    console.log(`La lettre ${colors.red(playerResult[i])} est bien placé (en ${i + 1} position)`)
                } else if (randomWord.indexOf(charSearch) > -1) {
                    console.log(`La lettre ${colors.yellow(playerResult[i])} n'est pas au bon endroit!`)
                } else {
                    console.log(`La lettre ${playerResult[i]} ne fait pas parti du mot`)
                }
                i++;
            }
            coup++;
            motus();
        });
    }
}

motus();










// var mysteryNum = Math.floor(Math.random() * 100 + 1)
// console.log("Nombre mystère aléatoire", mysteryNum)
// function play() {


//     var playerResult = null;

//     prompt.message = colors.cyan.underline("Quel est le nombre mystère?");
//     prompt.start();

//     prompt.get(['number'], function (err, result) {

//         playerResult = result.number;

//         if (playerResult == mysteryNum) {
//             console.log(colors.green("Bravo!!!!!!"))
//         } else if (playerResult > mysteryNum) {
//             console.log(colors.yellow("c'est moins"))
//             play();
//             return;
//         } else if (playerResult < mysteryNum) {
//             console.log(colors.yellow("c'est plus"))
//             play();
//             return;
//         } else {
//             console.log(colors.red("Error!"))
//             play();
//             return;
//         }
//     });
// }

// play()