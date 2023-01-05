const Recipe = require('../models/recipe')
const Brewer = require('../models/brewer')
const Grinder = require('../models/grinder')

module.exports = {
    index,
    equipment,
    new: newRecipe,
    create,
    showAll,
    showOne,
    delete: deleteRecipe,
    edit,
    update
}

function index(req, res) {
    res.render("pour-over/index", { title: "Pour-Over" })
}

function equipment(req, res) {
    res.render("pour-over/equipment", { title: "Equipment" })
}

async function newRecipe(req, res) {
    try {
        const brewers = await Brewer.find({_id: {$nin: Recipe.brewer}})
        const grinders = await Grinder.find({_id: {$nin: Recipe.grinder}})
        res.render("pour-over/new-recipe", {
            title: "New Recipe", 
            brewers, 
            grinders
        })
    } catch (err) {
        console.warn(err.message)
    }
}

async function create(req, res) {
    const recipe = new Recipe(req.body)
    try {
        await recipe.save()
        res.redirect("/pour-over/recipes")
    } catch (err) {
        res.redirect("/pour-over/new-recipe")
    }
}

async function showAll(req, res) {
    try {
        const recipes = await Recipe.find({})
        res.render("pour-over/recipes", { title: "All Recipes", recipes })
    } catch (err) {
        console.warn(err.message)
    }
}

async function showOne(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        .populate("brewer")
        .populate("grinder")
        .exec()
        res.render("pour-over/show", { title: "Recipe", recipe })
    } catch (err) {
        console.warn(err.message)
    }
}

async function deleteRecipe(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        recipe.remove()
        await recipe.save()
        res.redirect("/pour-over/recipes")
    } catch (err) {
        res.redirect("/pour-over/recipes")
    }
}

async function edit(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        .populate("brewer")
        .populate("grinder")
        .exec()
        const brewers = await Brewer.find({_id: {$nin: recipe.brewer}})
        const grinders = await Grinder.find({_id: {$nin: recipe.grinder}})
        res.render("pour-over/edit", { title: "Edit", recipe, brewers, grinders})
    } catch (err) {
        console.warn(err.message)
    }
}

async function update(req, res) {
    try {
        const filter = {_id: req.params.id}
            const recipe = await Recipe.findOneAndUpdate(filter, req.body, {
                upsert: true
            })
        await recipe.save()
        res.redirect("/recipes/")
    } catch (err) {
        console.warn(err.message)
    }
}