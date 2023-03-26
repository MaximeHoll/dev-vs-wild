const express = require('express');
const router = express.Router();
const journalController = require('../controller/journal.controller')

// Get all entries
router.route('/')
    .get(journalController.getAll)
    .post(journalController.newEntry)

router.route('/:id_entry')
    .get(journalController.getSpecific)

module.exports = router;