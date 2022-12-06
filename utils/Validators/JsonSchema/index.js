const SchemaValidation = {};
const JsonSchema = require('./JsonSchema');
const schemas = JsonSchema.schemas;
const Strings = require('../../Strings');

// Json to JsonSchema : https://www.liquid-technologies.com/online-json-to-schema-converter

SchemaValidation.jsonValidator = (json, str = "") => {
    var returned_obj = {}
    console.log("hello")
    if (str) {
        if (JsonSchema.validate(json, schemas[str]).valid) {
            returned_obj = { status: true, message: Strings.JSON_VALIDATED }
        } else {
            returned_obj = { status: false, message: Strings.JSON_UNVALIDATION }
        }
    } else {
        returned_obj = { status: true, message: Strings.JSON_VALIDATED }
    }
    return returned_obj;
}

module.exports = SchemaValidation;