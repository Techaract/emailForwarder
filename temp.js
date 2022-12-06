var string = "hellomatey"

var str = string.substring(
    string.indexOf("hel") + 1, 
    string.lastIndexOf("matey")
);



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

const stringMatchForSubject = (subject, city) => {
    if (subject.includes(',')) {
        subject = subject.split(',');
        var lastIndex = subject.length > 0 ? subject.length - 1 : 0;
        if (subject[lastIndex].includes(city)) {
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

const subject = `Fwd: Nuovo contatto per l'annuncio CATANIA-14/12/2022-924/2017-Serena`
console.log(stringMatchForSubject(subject ,"CATANIA"));
