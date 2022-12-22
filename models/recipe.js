const mongoose = require('mongoose')
const Schema = mongoose.Schema



const recipeSchema = new Schema( {
    title: String,
    brewer: brewerSchema,
    grinder: grinderSchema,
    grindSize: Number,
    weight: Number,
    temperature: Number,
    notes: String,
    _id: ObjectId,
    createdByUser: ObjectId
})