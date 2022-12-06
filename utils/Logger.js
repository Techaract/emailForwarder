const loggerHelper = require('./LoggerHelper')
const logger = {}

logger.errorLog = (e = {message : "No Data Provided"}, event) => {
    loggerHelper.eventLogger(event,JSON.stringify(e))
}

logger.successLog = (data, event) => {
    loggerHelper.eventLogger(event,JSON.stringify(data))
}

logger.bodyLog = (data, event) => {
    loggerHelper.eventLogger(event,JSON.stringify(data))
}

exports.data = logger