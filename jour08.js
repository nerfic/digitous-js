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

request.get("https://api.chucknorris.io/jokes/random"), function (err, res, body) {
    console.log(err);
    console.log(res);
    var json = JSON.parse(body);
    console.log(json)
}
