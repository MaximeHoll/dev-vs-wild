const express = require('express');
const router = express.Router();
const journalController = require('../controller/journal.controller')

// Get all entries
router.route('/')
    .get(journalController.getAll)

//new entry
router.route('/')
    .post(journalController.newEntry)

module.exports = router;