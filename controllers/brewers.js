const Brewer = require('../models/brewer')

module.exports = {
    index,
    create,
    new: newBrewer
}

function index(req, res){
    res.render('equipment/index', { title: "Equipment" })
}

function create(req, res) {
    Brewer.create(req.body, function (err) {
        res.redirect('/equipment/new')
    })
}

function newBrewer(req, res) {
    Brewer.find({}, function (err, brewers) {
        res.render('equipment/new', { title: "Add Equipment", brewers})
    })
}