const mongoose = require('mongoose')
const Schema = mongoose.Schema

const grinderSchema = new Schema({
    name: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Grinder', grinderSchema)
