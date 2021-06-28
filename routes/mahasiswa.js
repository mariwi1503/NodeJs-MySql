const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'method get mahasiswa'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'methode post mahasiswa'
    })
});

router.get('/:nim', (req, res, next) => {
    const nim = req.params.nim
    res.status(200).json({
        message: 'mahasiswa ' + nim
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'method put mahasiswa'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'method delete mahasiswa'
    })
});


module.exports = router;