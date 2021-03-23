const mongoose = require('mongoose')
const Schema = mongoose.Schema


const albumSchema = new Schema({
    albumName: String,
    releaseYear: Number,
    runTime: Number,
})

const memberSchema = new Schema({
    fullName: String,
    instrument: String
})

const bandSchema = new Schema({
    bandName: {type: String, required: true, unique: true},
    yearFormed: Number,
    bandMembers: [memberSchema],
    albums: [albumSchema],
    genre: String,
    stillActive: Boolean,
}, { timestamps: true })


module.exports = mongoose.model('Band', bandSchema)