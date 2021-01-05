var request = require("request");

// 01 - Countries

var countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    var json = JSON.parse(body);
    var i = 0;
    var j = 0;
    var result = "";

    while (i < json.length) {
        countriesNames.push(json[i].name);
        i++;
    }
    while (j < countriesNames.length) {
        result += `${countriesNames[j]}, `
        j++;
    }
    console.log("Ex 01", result)
})

// 02 - Chuck Norris

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    var json = JSON.parse(body);
    console.log("Ex 02", json.value)
})

// 03 - Pokemon

function catchPokemon(id) {
    request.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (err, res, body) {

        var json = JSON.parse(body)
        console.log("Ex 03", json.name, id)
    })
}

catchPokemon(150)