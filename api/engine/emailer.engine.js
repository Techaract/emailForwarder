module.exports = (db) => {
    const { readMail } = require('../../utils/Emailer/index')
    const Emailer = {
        emailerEngine: async (status) => {
            if (status) {
                setInterval(async () => {
                    console.log("Emailer engine is running");
                    try {
                        await readMail();
                    }
                    catch (e) {
                        console.log("GLobalErrod", e.message);
                    }
                }, 10000)
            }
        }
    }
    return Emailer;
}