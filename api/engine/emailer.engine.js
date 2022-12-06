module.exports = (db) => {
    const { readMail } = require('../../utils/Emailer/index')
    const Emailer = {
        emailerEngine: async (status) => {
            if (status) {
                setInterval(() => {
                    console.log("Emailer engine is running");
                    readMail();
                }, 10000)
            }
        }
    }
    return Emailer;
}