const mysql = require("mysql");

const con = mysql.createConnection({
    host: process.env.HOSTV,
    user: process.env.USERV,
    password: process.env.PASSWORDV,
    database: process.env.DATABASEV,
    port:3306
    // password: "ebueidni",
});

// timeweb
// const con = mysql.createConnection({
//     host: "92.53.96.158",
//     user: "moneyshop_video",
//     password: "4508833Aa",
//     database: 'moneyshop_video',
//     port:3306
//     // password: "ebueidni",
// });

//freemysqlhosting
// const con = mysql.createConnection({
//     host: "sql7.freemysqlhosting.net",
//     user: "sql7636401",
//     password: "zpwTzgWA8y",
//     database: 'sql7636401',
//     port:3306
//     // password: "ebueidni",
// });
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to db Films!");
});

module.exports = {con}