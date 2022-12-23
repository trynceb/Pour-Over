const Recipe = require('../models/recipe')

module.exports = {
    index,
    new: newRecipe,
    create,
    showAll
}

function index(req, res) {
    res.render("pour-over/index", { title: "Pour-Over" })
}

function newRecipe(req, res) {
    res.render("pour-over/new-recipe", { title: "New Recipe" } )
}

function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function(err) {
        if (err) return res.redirect("/pour-over/new-recipe")
        res.redirect("/pour-over/recipes")
    })
}

function showAll(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render("pour-over/recipes", { title: "All Recipes", recipes })
    })
}