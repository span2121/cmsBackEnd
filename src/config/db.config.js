'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'Activityclg'
});
//to be contineous interaction with server
// setInterval(function () {
//   dbConn.query('select * from user');
// }, 5000);
// dbConn.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });
module.exports = dbConn;
// for database connection 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'