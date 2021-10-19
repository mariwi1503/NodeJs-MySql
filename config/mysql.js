const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'ary',
    password: 'silahkan',
    database: 'kuliah'
});

con.connect((err) => {
    if(err) throw err;
    console.log('connection success')
})

module.exports = con;