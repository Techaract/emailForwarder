const ENVIRONMENT = {
    Local: process.env.LOCAL, //For Testing / Debugging
    Development: process.env.DEVELOPMENT, //For Dev Env
    Staging: process.env.STAGING, // For Stg Env
    Production: process.env.PRODUCTION, // For Production Env
};

//Current Environment
const env = process.env.ENVIRONMENT;

var debugMode = true;

var database_name = "";
var database_user = "";
var database_password = "";
var database_host = "";
var database_port = '3306';
var database_connection_limit = 10;
var database_multiple_statements = true;

var frontend_url, base_url, server_file_path, upload_folder_name, event_logs = "eventLogs";
var protocol, domain, port, ssl, secure, httpOnly, whitelist = [];

if (env === ENVIRONMENT.Local) {
    protocol = process.env.HTTP_UNSECURE
    domain = process.env.DOMAIN_LOCAL
    port = process.env.PORT_LOCAL;
    ssl = undefined
    debug = false;
    frontend_url = ``
    base_url = ``
    event_logs = `${event_logs}${env}`;
    database_name = process.env.DB_NAME_LOCAL;
    database_user = process.env.DB_USER_LOCAL;
    database_password = process.env.DB_PASSWORD_LOCAL;
    database_host = process.env.DB_HOST_LOCAL;
    database_port = process.env.DB_PORT_LOCAL;
    database_connection_limit = process.env.DB_CONNECTION_LIMIT;
    database_multiple_statements = process.env.DB_MULTIPLE_STATEMENT;
    httpOnly = secure = true;
    debugMode = false
}

module.exports = {
    protocol,
    domain,
    port,
    ssl,
    event_logs,
    server_file_path,
    secure,
    httpOnly,
    debugMode,
    db_connection_limit: 10,
    db_multiple_statements: true,
    server_port: port,
    database_connection_limit,
    database_host,
    database_multiple_statements,
    database_name,
    database_password,
    database_port,
    database_user,
    base_url,
    frontend_url,
    upload_folder_name
};
