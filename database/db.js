const mysql = require("mysql2");
//MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root12345",
    database: "weatherappuser"
});

connection.connect((err) => {
    if (err) console.log("Error connecting to MySQL:", err);
});

module.exports = {
    connection
};