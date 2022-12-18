const json = require('../../output.json')
module.exports.findStringForEmail = (subject = "", textBody = "") => {
    var email = null
    json.forEach(item => {
        //need to write logic here.
        const result = stringMatchForSubject(subject, item['CITY']);
        result && console.log(result);
        if (result //subject.includes(item['CITY']) 
            || textBody.includes(item['CITY'])
            //|| stringMatchForSubject(subject, item['CITY NAME'])
            // || textBody.includes(item['CITY NAME'])
        ) {
            email = item['DISTRICT@asteflorio.com'];
            console.log(email)
        }
    })
    //console.log("ye hai email", email);
    return email;
}

const stringMatchForSubject = (subject = "", city = "") => {
    subject = subject.toLowerCase();
    city = city.toLowerCase();
    if (subject.includes(',')) {
        subject = subject.split(',');
        var lastIndex = subject.length > 0 ? subject.length - 1 : 0;
        if (subject[lastIndex].trim() === city) {
            return true;
        } else {
            return false;
        }
    } else if (subject.includes(city)) {
        return true;
    } else {
        return false
    }
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


parseBetween = (beginString, endString, originalString) => {
    var beginIndex = originalString.indexOf(beginString);
    if (beginIndex === -1) {
        return null;
    }
    var beginStringLength = beginString.length;
    var substringBeginIndex = beginIndex + beginStringLength;
    var substringEndIndex = originalString.indexOf(endString, substringBeginIndex);
    if (substringEndIndex === -1) {
        return null;
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