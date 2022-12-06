const Validator = require('jsonschema').Validator;
var v = new Validator();

var instance = 4;
var schema = {
    "id" : "/first_schema",
    "type": "object",
    "properties" : {
        "name" : {
            "type" : "string",
        },
        "age" : {
            "type" : "integer",
        }
    },
    "required" : ['name']
};

var json = {
    "name" : "ashar",
    "age" : 2
}
v.addSchema(schema);

console.log(v.schemas['/first_schema']);
console.log(v.validate(json, v.schemas['/first_schema']).valid);