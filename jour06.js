var prompt = require('prompt');
var colors = require("colors/safe");

// 01 - Format

function formatDate2(string) {

    var année = "";
    var mois = "";
    var jour = "";

    for (var i = 0; i < 4; i++) {
        année = année + string[i]
    }
    for (var j = 5; j < 7; j++) {
        mois = mois + string[j]
    }
    for (var k = 8; k < 10; k++) {
        jour = jour + string[k]
    }
    console.log(jour, mois, année)
}

formatDate2('2020-10-28')


function format(string) {
    var date = new Date(string)

    var jours = date.getDate();
    var mois = date.getMonth() + 1;
    var année = date.getFullYear();

    console.log(`${jours}/${mois}/${année}`)
}

format("1998-12-28")


// 02 - Age

function calculateAge(string) {
    date = new Date(string);
    var difference = Date.now() - date.getTime();
    var age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(calculateAge('1998-07-28'))


// 03 - Validator

