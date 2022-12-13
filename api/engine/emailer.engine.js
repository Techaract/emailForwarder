module.exports = (db) => {
    const { readMail } = require('../../utils/Emailer/index')
    const Emailer = {
        emailerEngine: async (status) => {
            if (status) {
                setInterval(async () => {
                    console.log("Emailer engine is running");
                    await readMail();
                }, 10000)
            }
        }
    }
    return Emailer;
}