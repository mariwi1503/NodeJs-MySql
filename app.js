const express = require('express');

const app = express();
const router = require('./routes/mahasiswa')

app.use('/mahasiswa', router)

module.exports = app;