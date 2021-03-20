const Band = require('../models/band')


function newBand(req, res) {
    res.render('bands/new')
}

function create(req, res) {
    req.body.stillActive = !!req.body.stillActive
    req.body.bandMembers = req.body.bandMembers.replace(/\s*,\s*/g, ',')
    if (req.body.bandMembers) req.body.bandMembers = req.body.bandMembers.split(',')
    
    req.body.albums = req.body.albums.replace(/\s*,\s*/g, ',')
    if (req.body.albums) req.body.albums = req.body.albums.split(',')
    
    const band = new Band(req.body)
    band.save(function(err) {
        if (err) return res.render('bands/new')
        console.log(band)
        res.redirect('/bands/index')
    })
}

function index(req, res) {
    Band.find({}, function(err, bands) {
        res.render('bands/index', {
            bands
        })
    })
}






module.exports = {
    new: newBand,
    create,
    index,
}