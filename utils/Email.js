const mailin = require('mailin');


mailin.start({
    port: 25,
    disableWebhook: true // Disable the webhook posting.
});

mailin.on('authorizeUser', function (connection, username, password, done) {
    if (username == "astefloriocompany@gmail.com" && password == "@dm1n123") {
        done(null, true);
    } else {
        done(new Error("Unauthorized!"), false);
    }
});

mailin.on('startMessage', function (connection) {
    /* connection = {
        from: 'sender@somedomain.com',
        to: 'someaddress@yourdomain.com',
        id: 't84h5ugf',
        authentication: { username: null, authenticated: false, status: 'NORMAL' }
      }
    }; */
    console.log(connection);
});

mailin.on('message', function (connection, data, content) {
    console.log(data);
    /* Do something useful with the parsed message here.
     * Use parsed message `data` directly or use raw message `content`. */
  });