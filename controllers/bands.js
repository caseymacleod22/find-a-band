const Band = require('../models/band')


// function newBand(req, res) {
//     res.render('bands/new')
// }

function create(req, res) {
    req.body.stillActive = !!req.body.stillActive
    // req.body.bandMembers = req.body.bandMembers.replace(/\s*,\s*/g, ',')
    // if (req.body.bandMembers) req.body.bandMembers = req.body.bandMembers.split(',')
    
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

function show(req, res) {
    Band.findById(req.params.id, function(err, band) {
        res.render('bands/show', {
            band
        })
    })
}

function getBand(req, res) {
    const searchTerm = {bandName: req.query.band}
    Band.findOne(searchTerm,  function (err, band) {
       console.log(band)
        res.json(band)
    })
}

function search(req, res) {
    res.render('bands/search', {bandName: 'Search'})
}

module.exports = {
    new: newBand,
    create,
    index,
    show,
    search,
    getBand,
}