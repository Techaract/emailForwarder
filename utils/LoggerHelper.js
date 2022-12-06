const { event_logs, debugMode } = require('../config');
const fileUtility = require('./fs.utility');

Number.prototype.padStart = function (maxLength, fillString = " ") {
    return this.toString().padStart(maxLength, fillString);
}

module.exports.formatDate = formatDate = function (date) {
    date = date || new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1).padStart(2, "0") + "-" + date.getDate().padStart(2, "0");
}

module.exports.eventLogger = function (eventName, data = 'No data provided') {
    if (debugMode) {
        let log;
        let dateTime = new Date().toString();
        log = dateTime + "----" + eventName + "----" + data + "\r\n";
        let file_path = `../${event_logs}/${formatDate()}.txt`;
        fileUtility.appendText(file_path, log);
    }
}