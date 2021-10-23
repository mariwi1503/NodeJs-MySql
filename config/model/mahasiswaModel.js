const Sequelize = require('sequelize');
const db = require('../database/mysql')
const program = require('./programModel')

let mahasiswa = db.define('mahasiswa',
{
    nim: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    id_program: Sequelize.INTEGER,
    alamat: Sequelize.STRING,
    angkatan: Sequelize.INTEGER
    // foto: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

mahasiswa.hasOne(program, { foreignKey: 'id_program'})
mahasiswa.belongsTo(program, { foreignKey: 'id_program'})

mahasiswa.removeAttribute('id'); // mencegah id default dari sequelize ke tabel
module.exports = mahasiswa;