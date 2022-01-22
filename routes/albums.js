const express = require('express')
const router = express.Router()
const albumsCtrl = require('../controllers/albums')

router.post('/bands/:id/albums', albumsCtrl.create)

// module.exports = router