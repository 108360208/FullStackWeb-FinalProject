var sqlite3=require('sqlite3');
var db=new sqlite3.Database('./database/data.db');
module.exports = db;
