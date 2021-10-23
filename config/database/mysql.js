// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'ary',
//     password: 'silahkan',
//     database: 'kuliah'
// });

// con.connect((err) => {
//     if(err) throw err;
//     console.log('connection success')
// })

// module.exports = con;

const Sequelize = require('sequelize');

const db = new Sequelize('kuliah', 'ary', 'silahkan', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;