//
// // подключение к БД
// const {con} = require("./connectionDB");
//
//
// function  selectAllUsers() {
//     return new Promise((resolve, reject) => {
//         con.query(`SELECT * FROM users`, (err, res) => {
//             if (err) reject(err);
//             resolve(res)
//         });
//     })
// }
//
//
//
//
//
// module.exports = {
//     selectAllUsers
//
// }