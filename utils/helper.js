const fileUtility = require('./fs.utility');

Number.prototype.padStart = function (maxLength, fillString = " ") {
    return this.toString().padStart(maxLength, fillString);
}

module.exports.formatDate = formatDate = function (date) {
    date = date || new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1).padStart(2, "0") + "-" + date.getDate().padStart(2, "0");
}

module.exports.eventLogger = function (eventName, data = 'No data provided') {
    let log;
    let dateTime = new Date().toString();
    // log = dateTime + "\r\n" + eventName + "\r\n" + data + "\r\n";
    log = dateTime + "---" + eventName + "---" + data + "\r\n";
    let file_path = `/${"eventLogs"}/${formatDate()}.txt`;
    fileUtility.appendText(file_path, log);
}

module.exports.eventLoggerCrash = function (eventName, data = 'No data provided') {
    let log;
    let dateTime = new Date().toString();
    // log = dateTime + "\r\n" + eventName + "\r\n" + data + "\r\n";
    log = dateTime + "---" + eventName + "---" + data + "\r\n";
    let file_path = `/${"eventCrashLogs"}/${formatDate()}.txt`;
    fileUtility.appendText(file_path, log);
}