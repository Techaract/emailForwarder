const Functions = {};

Functions.decimalToHexString = (number) => {
    if (number < 0)
        number = 0xFFFFFFFF + number + 1;
    return number.toString(16).toUpperCase();
}

Functions.makeNDigits = function (cardNumber, num) {
    while (cardNumber.length < num) {
        cardNumber = "0" + cardNumber
    }
    return cardNumber
}

Functions.get12DigitsExcludingLastDigit = function (cardNumber) {
    var num = ""
    for (let i = 3; i < cardNumber.length - 1; i++) {
        num += cardNumber[i]
    }
    //console.log("12 digit number : ",num)
    return num
}

Functions.bitwiseXorHexString = function (pinBlock1, pinBlock2) {
    var result = ''
    for (let index = 0; index < 16; index++) {
        const temp = (parseInt(pinBlock1.charAt(index), 16) ^ parseInt(pinBlock2.charAt(index), 16)).toString(16).toUpperCase()
        result += temp
    }
    return result
}

Functions.bitwiseXorHexStringFor32Bit = function (a, b) {
    var res = "",
        l = Math.max(a.length, b.length);
    for (var i = 0; i < l; i += 4)
        res = ("000" + (parseInt(a.slice(-i - 4, -i || a.length), 16) ^ parseInt(b.slice(-i - 4, -i || b.length), 16)).toString(16)).slice(-4) + res;
    return res;
}

Functions.convert32To16Hex = function (hex) {
    var hex16 = ""
    for (let i = 0; i < hex.length; i += 2) {
        var temp = hex[i] + "" + hex[i + 1]
        hex16 += parseInt(temp, 16).toString(16).toUpperCase();
    }
    return hex16
}

Functions.getLast4digits = function (str = "") {
    return str.substr(str.length - 4)
}

Functions.getTokenExpiry = function () {
    var dt = new Date()
    dt.setHours(dt.getHours() + 2)
    return dt.toISOString().split('T')[0] + " " + dt.toISOString().split('T')[1].slice(0, -1);
}


module.exports = Functions;