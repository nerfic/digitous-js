function multiply(num) {
    var errorMsg = "Error";
    var result = ""

    if (num) {
        for (var i = 1; i <= 10; i++) {
            result += `${num} x ${i} = ${num * i} \n`;
        }
        return result;
    } else {
        return errorMsg;
    }
}

function addition(num) {
    var errorMsg = "Error";
    var result = ""

    if (num) {
        for (var i = 1; i <= 10; i++) {
            result += `${num} + ${i} = ${num + i} \n`;
        }
        return result;
    } else {
        return errorMsg;
    }
}

module.exports = { multiply, addition };