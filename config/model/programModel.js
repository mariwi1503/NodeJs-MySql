const Sequelize = require('sequelize');
const db = require('../database/mysql')

let program = db.define('program',
{
    id_program: {type:Sequelize.INTEGER, primaryKey: true},
    nama_program: Sequelize.STRING,

},{
    freezeTableName: true,
    timestamps: false
})

// program.removeAttribute('id'); // mencegah id default dari sequelize ke tabel
module.exports = program;