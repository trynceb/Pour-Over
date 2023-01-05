const Recipe = require('../models/recipe')
const Brewer = require('../models/brewer')
const Grinder = require('../models/grinder')
const recipe = require('../models/recipe')



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

function newRecipe(req, res) {
    Brewer.find(
        {_id: {$nin: recipe.brewer}},
        function(err, brewers) {
            Grinder.find(
                {_id: {$nin: recipe.grinder}},
                function(err, grinders) {
                    res.render("pour-over/new-recipe", { title: "New Recipe", brewers, grinders } )
                }
            )
        }
    )
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

function showOne(req, res) {
    Recipe.findById(req.params.id)
        .populate('brewer')
        .populate('grinder')
        .exec(function(err, recipe) {
            if (err) {
                res.send(err);
            }
            res.render("pour-over/show", { title: "Recipe", recipe })
        });
}


function deleteRecipe(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.remove()
        recipe.save(function(err) {
            if (err) return res.redirect("/pour-over/recipes")
            res.redirect("/pour-over/recipes")
        })
    })
}

function edit(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        Brewer.find(
            {_id: {$nin: recipe.brewer}},
            function(err, brewers) {
                Grinder.find(
                    {_id: {$nin: recipe.grinder}},
                    function(err, grinders) {
                        res.render("pour-over/edit", { title: "Edit", recipe, brewers, grinders})
                    }
                )
            }
        )
    })
}


async function update(req, res) {
    try{
        const filter = {_id: req.params.id}
            let recipe = await Recipe.findOneAndUpdate(filter, req.body, {
                upsert: true
            })
        await recipe.save((err) => {
                return res.redirect("/recipes/")
            })
    } catch {(err) => {
    console.warn(err.message)
    }}
}

