function calculate(num1, operator, num2) {

    var errorMsg = "Error";
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1, operator, num2) {
        if (operator == "+") {
            return num1 + num2;
        } else if (operator == "-") {
            return num1 - num2;
        } else if (operator == "*") {
            return num1 * num2;
        } else if (operator == "/") {
            return num1 / num2;
        } else if (operator == "%") {
            return num1 % num2;
        } else {
            return errorMsg
        }
    } else {
        return errorMsg
    }
}

console.log(calculate(process.argv[2], process.argv[3], process.argv[4]))
console.log("\x1b[33m%s\x1b[0m", "--------------");