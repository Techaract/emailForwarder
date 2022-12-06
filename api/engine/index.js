module.exports = (db) => {
    const engines = {};

    //Print All engines;

    //Print Active engines;

    const otpEngine = require('./otp.engine')(db);
    const notificationEngine = require('./notification.engine')(db);

    otpEngine.sendOtp(process.env.OTP_SEND_ENGINE === "true");

    notificationEngine.emailNotications(process.env.NOTIFICATION_EMAIL_ENGINE === "true");
    notificationEngine.pushNotifications(process.env.NOTIFICATION_PUSH_ENGINE === "true");
}

