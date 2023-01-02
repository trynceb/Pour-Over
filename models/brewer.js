const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brewerSchema = new Schema({
    name: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Brewer', brewerSchema)
