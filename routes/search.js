const express = require('express')
const router = express.Router()
const bandsCtrl = require('../controllers/bands')

router.get('/bands/search', bandsCtrl.search)

module.exports = router