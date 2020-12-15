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

console.log(multiply(process.argv[2]))
console.log("\x1b[33m%s\x1b[0m", "--------------");