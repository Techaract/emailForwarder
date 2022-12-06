const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { protocol, ssl, server_port } = require('./config')
const http = require(protocol);

//For Swagger Documentation;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


require('./api/model')
const { sendStatus } = require('./utils')
const fs = require('fs');
var fileupload = require("express-fileupload");
const bodyparser = require('body-parser');
const helmet = require("helmet");

const app = express();
const router = require('./api/routes');
var server;
app.set('view engine', 'hbs');
app.set('views', 'views');
//Ashar work
app.use(helmet());
app.use(express.json()); //Used to parse JSON bodies
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(fileupload());
app.use(express.static('public'));
app.use("uploads", express.static("uploads"));

//custom cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH')
        res.status(200).json({})
    }
    next();
})
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);

app.use((error, req, res, next) => {
    console.log({error});
    sendStatus.data.badRequestStatus(res,req, {
        Message: "Something went wrong",
        ErrorLog: error.message,
        Code: 400,
    }, "Something went wrong")
});

if (protocol == "https" && ssl && ssl.key && ssl.cert && ssl.ca) {
    server = new http.createServer({
        key: fs.readFileSync(ssl.key),
        cert: fs.readFileSync(ssl.cert),
        ca: fs.readFileSync(ssl.ca),
        requestCert: false,
        rejectUnauthorized: false
    }, app);
} else {
    server = http.createServer(app);;
}

server.listen(process.env.PORT || server_port, () => {
    console.log("Server is running on port : " + server_port)
});