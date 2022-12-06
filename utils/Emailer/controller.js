const json = require('../../output.json')
module.exports.findStringForEmail = (subject = "", textBody = "") => {
    var email = null
    json.forEach(item => {
        //need to write logic here.
        if(subject.includes(item['CITY']) 
        || textBody.includes(item['CITY']) 
        || subject.includes(item['CITY NAME']) 
        || textBody.includes(item['CITY NAME'])){
            email = item['DISTRICT@asteflorio.com'];
        }
    })
    //console.log("ye hai email", email);
    return email;
}


module.exports.splitEmail = (email = "") => {
    var str = email.split(' ');
    var lastIndex = str.length - 1;
    str = str[lastIndex].split('\n');
    return str[1];
}