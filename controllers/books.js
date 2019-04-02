const book = require('../models/book');

class Books {
    static create(req, res) {
        book
            .createBook(req.body)
            .then(data => {


                res
                    .status(201)
                    .json({
                        message: 'buku berhasil didaftarkan',
                        hasil: data.ops
                    })
            })
            .catch(err => {
                console.log(err);
                res
                    .status(500)
                    .json({
                        message: err
                    })
            })
    }

    static read(req, res) {


        book
            .readBooks()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({
                        message: err
                    })
            })

    }

    static delete(req, res) {
        book
            .deleteBook(req.params.isbn)
            .then(data => {
                res
                    .json({
                        message: 'buku berhasil dihapus'
                    })
            })
            .catch(err => {
                res
                    .status(500)
                    .json({
                        message: err
                    })
            })
    }

    static update(req, res) {
        book
            .updateBook(req.params.isbn, req.body)
            .then(data => {
                res
                    .json({
                        message: 'buku berhasil diperbaharui'
                    })
            })
            .catch(err => {
                res
                    .status(500)
                    .json({
                        message: err
                    })
            })
    }
}

module.exports = Books;