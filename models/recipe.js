const mongoose = require('mongoose')
const Schema = mongoose.Schema


const recipeSchema = new Schema( {
    name: String,
    brewer: [{ type: Schema.Types.ObjectId, ref: "Brewer" }],
    grinder: [{ type: Schema.Types.ObjectId, ref: "Grinder" }],
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