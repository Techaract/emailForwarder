const json = require('../../output.json')
const email_type_one = "idealista";
const email_type_two = "immobiliare";
const email_type_two_unique = `text-decoration: none;" alig`
const email_type_two_uniquev2 = "13px; color: #666666; line-height: 25px; text-decoration:=";
const email_type_two_sub_strings = [
    `text-decoration: none;" alig`,
    "13px; color: #666666; line-height: 25px; text-decoration:="
  ]
module.exports.findStringForEmail = (subject = "", textBody = "") => {
    var email = null
    json.forEach(item => {
        //need to write logic here.
        const result = stringMatchForSubject(subject, item['CITY'], textBody);
        if (result) {
            email = item['DISTRICT@asteflorio.com'];
            console.log(email)
        }
    })
    //console.log("ye hai email", email);
    return email;
}

const stringMatchForSubject = (subject = "", city = "", textBody = "") => {
    subject = subject.toLowerCase();
    city = city.toLowerCase();
    if (subject.includes(',')) {
        //email_type_one
        subject = subject.split(',');
        var lastIndex = subject.length > 0 ? subject.length - 1 : 0;
        return subject[lastIndex].trim() === city;
    } else {
        if (textBody.includes(email_type_two)) {
            //email_type_two
            return extractFromHTML(textBody, city);
        } else {
            return false;
        }

    }
}

const extractFromHTML = (textBody, city) => {
    // console.log(typeof textBody);
    var unique_string = "";
    email_type_two_sub_strings.forEach(str => {
        if(textBody.includes(str)){
            unique_string = str;
        }
    })
    // const unique_string = textBody.includes(email_type_two_unique) ? email_type_two_unique : email_type_two_uniquev2
    let str = parseBetween(unique_string, "</td>", textBody);
    var newStr = str.split(',');
    var lastIndex = newStr.length > 0 ? newStr.length - 1 : 0;
    // console.log("extractFromHTML", newStr[lastIndex].trim(), city)
    if (newStr[lastIndex].toLowerCase().trim() === city) {
        console.log("extractFromHTML", newStr[lastIndex].trim(), city)
    }

    return newStr[lastIndex].toLowerCase().trim() === city;
}

module.exports.convertEmailHTMLToHTML = (html) => {
    var mySubString = parseBetween("<html>", "</html>", html)
    try {
        const val = mySubString.replace(/3D/g, '');
        return val
    } catch (e) {
        return "";
    }
}


const parseBetween = (beginString, endString, originalString) => {
    var beginIndex = originalString.indexOf(beginString);
    if (beginIndex === -1) {
        return "";
    }
    var beginStringLength = beginString.length;
    var substringBeginIndex = beginIndex + beginStringLength;
    var substringEndIndex = originalString.indexOf(endString, substringBeginIndex);
    if (substringEndIndex === -1) {
        return "";
    }
    return originalString.substring(substringBeginIndex, substringEndIndex);
}


module.exports.splitEmail = (email = "") => {
    if (typeof email === 'string') {
        var str = email.split(' ');
        var lastIndex = str.length - 1;
        str = str[lastIndex].split('\n');
        return str[1];
    } else {
        return ""
    }
}