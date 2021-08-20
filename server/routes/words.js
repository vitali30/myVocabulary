const express = require('express');
const router = express.Router();
const words = require('../controllers/words')

router.post('/', words.addNewWord);
router.get('/last', words.getLastWord);
router.get('/:id', words.getWordById);
router.get('/', words.getAllWords);
router.post('/byStatus', words.getAllWordsByStatus);
router.post('/byRating', words.getAllWordsByRating);
router.put('/', words.changeWord);
router.patch('/', words.updateWordRating);
router.delete('/', words.deleteOneWord);

module.exports = router; 