module.exports = (db) => {
    const NOTIFICATIONS = {
        emailNotications: async (status) => {
            if (status) {
                setInterval(() => {
                    console.log(db)
                    console.log("checking and sending emailNotications");
                }, 5000);
            }
        },

        pushNotifications: async (status) => {
            if (status) {
                setInterval(() => {
                    console.log(db)
                    console.log("checking and sending pushNotifications");
                }, 5000)
            }

        }
    }
    return NOTIFICATIONS;
}