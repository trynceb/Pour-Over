const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brewerSchema = new Schema( {
    name: String
})

module.exports = mongoose.model('Brewer', brewerSchema )