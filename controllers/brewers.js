const Brewer = require('../models/brewer')
const Grinder = require('../models/grinder')
const Recipe = require('../models/recipe')

module.exports = {
    index,
    create,
    new: newBrewer
}

function index(req, res){
    Brewer.find({}, function (err, brewers) {
        Grinder.find({}, function (err, grinders) {
            res.render('equipment/index', { title: "Equipment", brewers, grinders })
        })
    })
}

function create(req, res) {
    console.log(req.body)
    console.log("HI")
    const brewer = new Brewer (req.body)
    brewer.save(function (err) {
        if (err) res.redirect('/equipment/new')
        res.redirect('equipment/index')
    })
}

function newBrewer(req, res) {
    Brewer.find({}, function (err, brewers) {
        res.render('equipment/new', { title: "Add Equipment", brewers })
    })
}

// function newBrewer(req, res) {
//     Recipe.find(
//         {_id: {$nin: recipe}},
//         function(err, brewers, recipes) {
//             res.render('equipment/new', { title: "Add Equipment", brewers, recipes })
//         }
//     )
// }