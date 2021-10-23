const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql')
const controller = require('../controller/index')

//multer untuk upload file
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './assets/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage})

router.get('/', controller.mahasiswa.getAll);

router.get('/search', controller.mahasiswa.getsearch);

router.post('/', controller.mahasiswa.create);

router.get('/:nim', controller.mahasiswa.getOne);

router.put('/:nim', controller.mahasiswa.update);

router.delete('/:nim', controller.mahasiswa.delete);


module.exports = router;