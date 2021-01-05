// 01 - Countries

var request = require("request");

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
    console.log(result)
})

// 02 - Chuck Norris

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    var json = JSON.parse(body);
    console.log(json.value)
})

// 03 - Pokemon

function catchPokemon(id) {
    request.get(`https://pokeapi.co/api/v2/pokedex/${id}`, function (err, res, body) {
        var json = JSON.parse(body)
        console.log(json)
    })
}

console.log(catchPokemon(1))