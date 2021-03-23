const express = require('express')
const router = express.Router()
const membersCtrl = require('../controllers/members')

router.post('/bands/:id/members', membersCtrl.create)

module.exports = router