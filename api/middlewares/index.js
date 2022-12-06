const { Logger, Encryption, sendStatus, Validations } = require('../../utils')

exports.authValidation = async (req, res, next) => {
    try {
        const body = Encryption.responseDecryption(req.body)
        //need to write own code;
        console.log({ body })
        req.jsonObject = body;
        req.logger = {};
        req.logger.url = req.url
        req.logger.request = body;
        req.logger.exception = {
            message: ""
        };
        next();
    } catch (e) {
        var response = {
            Code: 440,
            Message: "Something went wrong in authorization"
        }
        sendStatus.data.sessionExpiredStatus(res, req, response)
    }
}

exports.jsonValidation = (req, res, next) => {
    try {
        console.log("AsharObj", req.jsonObject);
        console.log("UrlAshar", req.url);
        var valid = Validations.JsonSchema.jsonValidator(req.jsonObject, req.url.toString());
        console.log({valid: valid});
        if (valid.status) {
            next();
        } else {
            const json_res = {
                Code: 400,
                Message: "Json Validation Error"
            }
            sendStatus.data.badRequestStatus(res, req, json_res, "Json Validation Error")
        }
    } catch (e) {
        console.log("errorMessage", e.message);
        var response = {
            Code: 440,
            Message: "Something went wrong in json Validation"
        }
        sendStatus.data.sessionExpiredStatus(res, req, response)
    }
}

//if we were to pass a parameter;
// exports.jsonValidation = (validation_str) => {
//     return (req, res, next) => {
//         // implement your business logic using 'myParam'
//         // ...
//         console.log(req.jsonObject);
//         console.log(validation_str);
//         next();
//     }
// }