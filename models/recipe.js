const mongoose = require('mongoose')
const Schema = mongoose.Schema



const recipeSchema = new Schema( {
    title: String,
    brewer: String,
    grinder: String,
    grindSize: Number,
    weight: Number,
    temperature: Number,
    notes: String,
    // _id: ObjectId,
    // createdByUser: ObjectId
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)