const dotenv = require('dotenv');
dotenv.config();
const { protocol, ssl, server_port } = require('./config');

const db = "From server.js"//require('./api/model');
// const { fromXlsxToJson } = require('./utils/FileConversion')
const { readMail, sendMail } = require('./utils/Emailer/index')
readMail();
// sendMail()
// fromXlsxToJson();
//convert file to json - done
//integrate the incoming email
//read city from email.
//string matching for cities
//send the email
// require('./api/engine')(db);