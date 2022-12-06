module.exports = (db) => {
    const controllers = {};
    controllers.otp = require('./otp.controller')(db);
    return controllers;
}