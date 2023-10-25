const mysql = require("mysql2");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "db-university"
});

module.exports = pool.promise();