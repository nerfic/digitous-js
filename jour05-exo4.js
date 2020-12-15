const { cpuUsage } = require('process');
var prompt = require('prompt');
var colors = require("colors/safe");
var mysteryNum = Math.floor(Math.random() * 100 + 1)
console.log("Nombre mystère aléatoire", mysteryNum)
function play() {


    var playerResult = null;

    prompt.message = colors.cyan.underline("Quel est le nombre mystère?");
    prompt.start();

    prompt.get(['number'], function (err, result) {

        playerResult = result.number;

        if (playerResult == mysteryNum) {
            console.log(colors.green("Bravo!!!!!!"))
        } else if (playerResult > mysteryNum) {
            console.log(colors.yellow("c'est moins"))
            play();
            return;
        } else if (playerResult < mysteryNum) {
            console.log(colors.yellow("c'est plus"))
            play();
            return;
        } else {
            console.log(colors.red("Error!"))
            play();
            return;
        }
    });
}

play()