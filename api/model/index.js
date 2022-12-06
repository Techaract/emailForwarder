const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const {
    database_name,
    database_host,
    database_password,
    database_user,
} = require('../../config');
const sequelize = new Sequelize(database_name, database_user, database_password, {
    host: database_host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


sequelize.authenticate().then(() => {
    console.log("Connected");
})
    .catch(e => {
        console.log("Error ", e.message);
    })

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync');
    })
    .catch(e => {
        console.log("syncError", e.message);
    })
module.exports = db;


