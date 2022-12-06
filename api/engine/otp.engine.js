module.exports = (db) => {
    const { otp } = require('../controller/index')
    const OTP = {
        sendOtp: async (status) => {
            if (status) {
                setInterval(() => {
                    console.log(db)
                    console.log("checking and sending sendOtp");
                }, 5000)
            }
        }
    }
    return OTP;
}