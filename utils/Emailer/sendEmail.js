const nodemailer = require('nodemailer');
const { SEND_MAIL_CONFIG } = require('./config');
const transporter = nodemailer.createTransport(SEND_MAIL_CONFIG);

const sendMail = async (subject, html, to) => {
  try {
    const time = new Date().toDateString();
    let info = await transporter.sendMail({
      from: SEND_MAIL_CONFIG.auth.user,
      to: to,
      subject: subject,
      //   html: `
      //   <div
      //     class="container"
      //     style="max-width: 90%; margin: auto; padding-top: 20px"
      //   >
      //     <h2>This is a testing email</h2>
      //     <p>Please ignore this mail</p>
      //     <p>sent at ${time}</p>
      //   </div>
      // `,
      html: html
    });
    console.log(`MAIL INFO: ${info}`);
    console.log(`MAIL SENT AT: ${time}`);
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  sendMail,
};