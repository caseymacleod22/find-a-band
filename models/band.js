const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bandSchema = new Schema({
    bandName: String,
    yearFormed: Number,
    bandMembers: [String], 
    albums: [String],
    genre: String,
    stillActive: Boolean,
}, { timestamps: true })


module.exports = mongoose.model('Band', bandSchema)