// const email = 'astefloriocompany@gmail.com'
// const password = '@dm1n123'
const email = 'aster@techaract.com'
const password = '3hzEQDOciN.^' //'Uo*x&b=uCn3%' //

module.exports.SEND_MAIL_CONFIG = {
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3',
    },
    requireTLS: true,
    port: 465,
    debug: true,
    host: 'mail.techaract.com',
    auth: {
        user: email,
        pass: password,
    },
}

module.exports.READ_MAIL_CONFIG = {
    imap: {
        user: email, // email address
        password: password, // password
        host: 'mail.techaract.com', // if you are using gmail service
        port: 993, // For gmail service, 465 for others
        authTimeout: 10000, // Stop retrying to read emails
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
    },
};