// file index ini berguna untuk menampung beberapa model
const mahasiswa = require('./mahasiswaModel')
const program = require('./programModel')
const model = {}

model.mahasiswa = mahasiswa; // menambah mahasiswa ke model
model.program = program 
module.exports = model; 