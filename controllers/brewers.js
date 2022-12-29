const Brewer = require('../models/brewer')

module.exports = {
    create,
    new: newBrewer
}

function create(req, res) {
    Brewer.create(req.body, function (err, brewer) {
        res.redirect('brewers/new')
    })
}

function newBrewer(req, res) {
    Brewer.find({}, function (err, brewers) {
        res.render('brewers/new]', { title: "Add Brewer", brewers})
    })
}