const Band = require('../models/band')

function create(req, res) {
    Band.findById(req.params.id, function(err, band) {
        band.bandMembers.push(req.body)
        band.save(function(err) {
            res.redirect(`/bands/${band.id}`)
        })
    })
}

module.exports = {
    create,
}