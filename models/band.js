const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    albumName: String,
    releaseYear: Number,
    runTime: Number,
})

const bandSchema = new Schema({
    bandName: String,
    yearFormed: Number,
    bandMembers: [String],
    albums: [albumSchema],
    genre: String,
    stillActive: Boolean,
}, { timestamps: true })


module.exports = mongoose.model('Band', bandSchema)