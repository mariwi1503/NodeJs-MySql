const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const router = require('./routes/mahasiswa')

app.use(morgan('dev')); // karena kita masih dev
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/mahasiswa', router)

module.exports = app;