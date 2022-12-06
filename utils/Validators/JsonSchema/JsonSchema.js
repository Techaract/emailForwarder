const Validator = require('jsonschema').Validator;
var v = new Validator();

//all Post Schemas
const usersSchemas = require('./users.validator');
const vehicleSchemas = require('./vehicle.validator');
const vehicleLogsSchemas = require('./vehicleLogs.validator');

//Users Posts;
v.addSchema(usersSchemas.postUser("/users"));
v.addSchema(usersSchemas.postLogin("/users/login"));

//Vehicle Posts
v.addSchema(vehicleSchemas.postVehicle("/vehicles"));

//VehicleLogs Posts
v.addSchema(vehicleLogsSchemas.postVehicleLogs("/vehicleLogs"));

module.exports = v;