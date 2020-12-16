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