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
        result += `${countriesNames[j]} - `
        j++;
    }
    console.log(result)
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

// My Bonus

function getMeteo(city, countryCode) {

    if (process.argv.length === 3) {
        console.log("Tu dois passer une ville et un code pays en argument! Ex: Paris FR")
    } else {
        request.get(`https://api.weatherbit.io/v2.0/current?city=${city},${countryCode}&key=c4bdca8420a34c48b86b623542682c0a`, function (err, res, body) {

            var json = JSON.parse(body);
            console.log(`Il fait actuellement ${json.data[0].temp} degrès à ${city}, ${countryCode.toUpperCase()}`)
        })
    }
}

getMeteo(process.argv[2], process.argv[3])