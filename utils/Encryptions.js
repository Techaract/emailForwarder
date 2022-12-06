const Encryptions = {};
const CryptoJS = require("crypto-js");

const secret = "";
const secret_ID = "";
const cardEncryption = ""

Encryptions.encryption = function (obj) {
    var objStr = JSON.stringify(obj)
    var encrypted = CryptoJS.AES.encrypt(objStr, secret);
    return encrypted.toString()
}

Encryptions.decryption = function (encrypted) {
    var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), secret);
    var objStr = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(objStr)
    return JSON.parse(objStr)
}

Encryptions.encrypt_id = function (id) {
    id = id.toString()
    var encrypted = CryptoJS.AES.encrypt(id, secret_ID);
    return encrypted.toString()
}

Encryptions.decrypt_id = function (str) {
    var decrypted = CryptoJS.AES.decrypt(str.toString(), secret_ID);
    var decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    return decrypted.toString()
}

Encryptions.channelEncryption = function (encrypted) {
    return encrypted
}

Encryptions.channelDecryption = function (encrypted) {
    return encrypted
}

Encryptions.responseDecryption = function (encrypted) {
    return encrypted
}

Encryptions.responseEncryption = function (encrypted) {
    return encrypted
}

Encryptions.cardEncryption = function (str) {
    var encrypted = CryptoJS.AES.encrypt(str, cardEncryption);
    return encrypted.toString()
}

Encryptions.cardDecryption = function (encrypted) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, cardEncryption);
    var objStr = decrypted.toString(CryptoJS.enc.Utf8);
    return objStr
}

module.exports = Encryptions;