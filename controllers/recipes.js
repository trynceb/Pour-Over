const Recipe = require('../models/recipe')

module.exports = {
    index,
    new: newRecipe
}

function index(req, res) {
    res.render("pour-over/index", { title: "Pour-Over" })
}

function newRecipe(req, res) {
    res.render("pour-over/new-recipe", { title: "New Recipe" } )
}