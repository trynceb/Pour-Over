const Brewer = require('../models/brewer')

module.exports = {
    index,
    create,
    new: newBrewer
}

function index(req, res){
    Brewer.find({}, function (err, brewers) {
        res.render('equipment/index', { title: "Equipment", brewers })
    })
}

function create(req, res) {
    const brewer = new Brewer (req.body)
    brewer.save(req.body, function (err) {
        if (err) res.redirect('/equipment/new')
        res.redirect('equipment/index')
    })
}

function newBrewer(req, res) {
    Brewer.find({}, function (err, brewers) {
        res.render('equipment/new', { title: "Add Equipment", brewers })
    })
}