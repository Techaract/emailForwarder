const imaps = require('imap-simple');
const { convert } = require('html-to-text');
const { READ_MAIL_CONFIG } = require('./config');
const fixedTo = 'astefloriocompany@gmail.com'
const { findStringForEmail, splitEmail, convertEmailHTMLToHTML } = require('./controller')
const { sendMail } = require('./sendEmail')
const { eventLogger, eventLoggerCrash } = require('../helper');
// const { writeFile } = require('../../utils/fs.utility')
// console.log({READ_MAIL_CONFIG});
const email_type_one = "idealista";
const email_type_two = "immobiliare";
const email_type_two_unique = `text-decoration: none;" alig`


const readMail = async () => {
  const loggerObject = {}
  try {
    const connection = await imaps.connect(READ_MAIL_CONFIG);
    console.log('CONNECTION SUCCESSFUL', new Date().toString());
    const box = await connection.openBox('INBOX');
    const inbox = 'UNSEEN'
    const searchCriteria = [inbox];
    loggerObject.searchCriteria = inbox
    const fetchOptions = {
      bodies: ['HEADER', 'TEXT'],
      markSeen: false,
    };
    const results = await connection.search(searchCriteria, fetchOptions);
    console.log("len", results.length);
    if (results.length > 0) {
      loggerObject.emailsLength = results.length;
      var count = 0
      loggerObject.mailArray = []
      results.forEach((res) => {
        //get id for email
        const logMailObject = {};
        const uuid = res.attributes.uid;
        logMailObject.uuid = uuid;
        //from where it is coming.
        const from = res.parts[0].body.from
        logMailObject.from = from
        //to whom it may have recieved
        const to = res.parts[0].body.to
        logMailObject.to = to
        //get the subject for email
        const subject = results[results.length - 1].parts[0].body.subject
        if (!subject[0].includes('Mail delivery failed')) {
          logMailObject.subject = subject;
          console.log({ subject });
          // console.log(uuid, from, to);
          // check either email is coming from valid email address.
          console.log(uuid, from, to, subject[0]);
          //filter (idk why is it necessary)
          const text = res.parts.filter((part) => {
            return part.which === 'TEXT';
          });
          // console.log(text)
          //get email body
          // console.log(text);
          if (count === 0) {
            //console.log("ASHAR",text[0].body);
            count++;
          }
          let emailHTML = text[0].body;
          emailHTML = convertEmailHTMLToHTML(emailHTML);
          // if (!emailHTML.includes(email_type_two)) {
          //   return;
          // }

          // console.log(emailHTML);
          //convert email body html to text
          // const emailText = splitEmail(convert(emailHTML));
          // console.log("splitEmail", emailText);
          //fetch city from subject and email text

          const toEmail = findStringForEmail(subject[0], emailHTML.includes(email_type_one) ? "" : emailHTML)
          logMailObject.toEmail;
          loggerObject.mailArray.push(logMailObject);
          //print wether the email address exists or not
          console.log({ subject: subject[0], toEmail })
          if (toEmail) {
            //send same subject and emailHtml to toEmail address
            eventLogger("readEmail", JSON.stringify(loggerObject))
            sendMail(subject, emailHTML, toEmail)
            // sendMail(subject[0], emailHTML, "ashar.ashfaq2@gmail.com")
            // connection.deleteMessage([uuid]);
          }
          //mark that email flagged
          connection.addFlags(uuid, "\Seen", (err) => {
            if (err) {
              console.log('Problem marking message for seen');
            } else {
              console.log("all good")
            }
          })
        }
      });
    }

    connection.end();

  } catch (error) {
    console.log(error);
    const errorObject = { message: e.message, data: loggerObject }
    eventLoggerCrash("readEmail", JSON.stringify(errorObject));
  }
};

// const readMail = async () => {
//   return new Promise((resolve, reject) => {
//     try {
//       const connection = await imaps.connect(READ_MAIL_CONFIG);
//       console.log('CONNECTION SUCCESSFUL', new Date().toString());
//       const box = await connection.openBox('INBOX');
//       const searchCriteria = ['UNSEEN'];
//       const fetchOptions = {
//         bodies: ['HEADER', 'TEXT'],
//         markSeen: false,
//       };
//       const results = await connection.search(searchCriteria, fetchOptions);
//       console.log("len", results.length);
//       var count = 0
//       results.forEach((res) => {
//         //get id for email
//         const uuid = res.attributes.uid;
//         //from where it is coming.
//         const from = res.parts[0].body.from
//         //to whom it may have recieved
//         const to = res.parts[0].body.to
//         //get the subject for email
//         const subject = res.parts[0].body.subject
//         console.log({ subject });
//         // console.log(uuid, from, to);
//         // check either email is coming from valid email address.
//         console.log(uuid, from, to, subject[0]);
//         //filter (idk why is it necessary)
//         const text = res.parts.filter((part) => {
//           return part.which === 'TEXT';
//         });
//         // console.log(text)
//         //get email body
//         // console.log(text);
//         if (count === 0) {
//           //console.log("ASHAR",text[0].body);
//           count++;
//         }
//         let emailHTML = text[0].body;
//         emailHTML = convertEmailHTMLToHTML(emailHTML);
//         // console.log(emailHTML);
//         //convert email body html to text
//         const emailText = splitEmail(convert(emailHTML));
//         console.log("splitEmail", emailText);
//         //fetch city from subject and email text
//         const toEmail = findStringForEmail(subject[0], emailText)
//         //print wether the email address exists or not
//         console.log({ subject: subject[0], toEmail })
//         if (toEmail) {
//           //send same subject and emailHtml to toEmail address
//           sendMail(subject, emailHTML, toEmail)
//           // sendMail(subject[0], emailHTML, "ashar.ashfaq2@gmail.com")
//           // connection.deleteMessage([uuid]);
//         }
//         //mark that email flagged
//         connection.addFlags(uuid, "\Seen", (err) => {
//           if (err) {
//             console.log('Problem marking message for seen');
//           } else {
//             console.log("all good")
//             resolve(true);
//           }
//         })
//         // if (from[0].includes(fixedTo) || to[0].includes(fixedTo)) {
//         //   //print all the things

//         // }
//       });
//       connection.end();

//     } catch (error) {
//       console.log(error);
//       reject(error)
//     }
//   })

// };
module.exports = {
  readMail,
};