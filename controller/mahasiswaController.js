const model = require('../config/model/index');
const { Op } = require('sequelize')
const controller = {}

controller.getAll = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.findAll({
            
                // attributes: [['nim', 'noInduk'], ['nama', 'namaMahasiswa'], ['id_program', 'kd_jurusan'], ['alamat', 'alamataSiswa'], ['angkatan', 'lulsanTahun']],
                include: [
                    { model: model.program }
                ],
                limit: 2
    
        })
            if(mahasiswa.length > 0 ) {
                res.status(200).json({
                    message: 'get data suskes',
                    data: mahasiswa
                })
            } else {
                res.status(200).json({
                    message: 'data tidak ditemukan',
                    data: []
                })
            }
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}

controller.getOne = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.findAll({ where: { nim: req.params.nim}})

        if( mahasiswa.length > 0) {
            res.status(200).json({
                message: 'get data sukses',
                data: mahasiswa
            })
        } else {
            res.status(200).json({
                message: 'data tidak ada',
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}

controller.create = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            id_program: req.body.id_program,
            alamat: req.body.alamat,
            angkatan: req.body.angkatan,
            foto: req.file.path
        })

        res.status(201).json({
            message: 'data berhasi dibuat',
            data: mahasiswa
        })
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}

controller.update = async (req, res) =>{
    try {
        let mahasiswa = await model.mahasiswa.update({
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }, {
            where: { nim: req.params.nim}
        })

        res.status(200).json({
            message: 'data berhasil diperbarui',
            data: mahasiswa
        })
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}

controller.delete = async (req, res) => {
    try {
        let mahasiswa = await model.mahasiswa.destroy({ where: { nim: req.params.nim}})

        res.status(200).json({
            message: 'data berhasil dihapus',
            data: mahasiswa
        })
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}

controller.getsearch = async (req, res) => {
    let search = req.query.keyword;
    try {
        
        let mahasiswa = await model.mahasiswa.findAll({
            // attributes: [ 'nim', 'nama',]
            attributes: [['nim', 'nomorInduk'],['nama', 'mahasiswa'],['kd_jurusan', 'kodeJurusan'],['alamat', 'tempatTinggal'],['angkatan', 'tahunAngkatan']],
                    where: {  
                        [Op.or]: [{
                            nim: {
                                [Op.like]: '%'+search+'%'}
                        }, {
                            nama: {
                                [Op.like]: '%'+search+'%'}
                        }]                 
                    }
        })
            if(mahasiswa.length > 0 ) {
                res.status(200).json({
                    message: 'get data suskes',
                    data: mahasiswa
                })
            } else {
                res.status(200).json({
                    message: 'data tidak ditemukan',
                    data: search
                })
            }
    } catch (error) {
        res.status(404).json({
            message: 'internal server error'
        })
    }
}


module.exports = controller;