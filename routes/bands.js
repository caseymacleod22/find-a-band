const express = require('express')
const router = express.Router ()
const bandsCtrl = require('../controllers/bands')


router.get('/index', bandsCtrl.index)
router.get('/new', bandsCtrl.new)
router.get('/:id/', bandsCtrl.show)
router.get('/show', bandsCtrl.search)
router.post('/index', bandsCtrl.create)

module.exports = router