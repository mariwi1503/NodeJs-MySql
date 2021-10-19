const express = require('express');
const router = express.Router();
const db = require('../config/mysql')

router.get('/', (req, res, next) => {
    const sql = "select * from mahasiswa";
    db.query(sql, (err, result) => {
        if(err) throw err;

        res.status(200).json({
            message: 'Data ditemukan',
            data: result
        })
    })
});

router.post('/', (req, res, next) => {
    const { nim, nama, jurusan } = req.body
    let sql = "insert into mahasiswa (nim, nama, jurusan) values ('"+nim+"', '"+nama+"', '"+jurusan+"')";
    db.query(sql, (err, result) => {
        if(err) throw err;
    })
    res.status(200).json({
        message: 'Data berhasil dibuat'
    })
});

router.get('/:nim', (req, res, next) => {
    const { nim } = req.params
    const sql = "select * from mahasiswa where nim="+nim;
    db.query(sql, (err, result) => {
        if(err) throw err;

        res.status(200).json({
            message: 'Data ditemukan',
            data: result
        })
    })
});

router.put('/:nim', (req, res, next) => {
    const { nim } = req.params
    const { nama, jurusan } = req.body
    let sql = "update mahasiswa set nama = '"+nama+"', jurusan = '"+jurusan+"' where nim ="+nim;
    db.query(sql, (err, result) => {
        if(err) throw err;
    })
    res.status(200).json({
        message: 'Data berhasil diupdate'
    })
});

router.delete('/:nim', (req, res, next) => {
    const { nim } = req.params
    let sql = "delete from mahasiswa where nim="+nim
    db.query(sql, (err, result) => {
        if(err) throw err;
    })
    res.status(200).json({
        message: 'Data berhasil dihapus'
    })
});


module.exports = router;