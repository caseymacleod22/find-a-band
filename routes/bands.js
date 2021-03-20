const express = require('express')
const router = express.Router ()
const bandsCtrl = require('../controllers/bands')

router.get('/new', bandsCtrl.new)
router.post('/index', bandsCtrl.create)
router.get('/index', bandsCtrl.index)

module.exports = router