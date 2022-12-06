const SendStatus = {}
const logger = require('./Logger');
const { Encryption } = require('../utils')
const successCode = {
    code: 200,
    message: 'Request successful'
};
const badRequest = {
    code: 400,
    message: "Bad Request"
}

const sessionExpired = {
    code: 440,
    message: "We signed you out to protect your account, please Sign In again!"
}

const unauthorizedRequest = {
    code: 401,
    message: "UnAuthorized Request"
}


const logStore = (req, str) => {
    if (req && req.body && req.body.logger) {
        logger.data.successLog(req.body.logger, str);
    }
}
const sendCode = (res, code, obj) => {
    //obj = Encryption.responseEncryption(obj)
    res.status(code).json(obj)
}
SendStatus.successStatus = (res, req, obj, message = "", stringLog = "No Data Provided") => {
    logStore(req, stringLog)
    var results = {
        code: successCode.code,
        codeMessage: successCode.message,
        message: message,
        body: obj
    };
    sendCode(res, successCode.code, results)

}

SendStatus.nothingStatus = (res, req, obj = {}, str = "") => {
    logStore(req, str)
}

SendStatus.unauthorizedStatus = (res, req, obj, str = "") => {
    logStore(req, str)
    res.status(unauthorizedRequest.code).json(obj)
}

SendStatus.sessionExpiredStatus = (res, req, obj, str = "") => {
    logStore(req, str)
    res.status(sessionExpired.code).json(obj)
}

SendStatus.badRequestStatus = (res, req, obj, str = "") => {
    logStore(req, str)
    var results = {}
    if (obj) {
        results = obj
    } else {
        results = {
            code: badRequest.code,
            message: str ? str : badRequest.message,
            jsonObject: null
        }
    }
    res.status(badRequest.code).json(results)
}


exports.data = SendStatus