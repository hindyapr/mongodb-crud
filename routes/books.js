const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');


router.get('/', booksController.read);
router.post('/', booksController.create);
router.put('/:isbn', booksController.update);
router.delete('/:isbn', booksController.delete);



module.exports = router;