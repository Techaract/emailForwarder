module.exports = (db) => {
    const emailerEngine = require('./emailer.engine')(db);
    emailerEngine.emailerEngine(process.env.EMAILER_SEND_ENGINE === "true");
}