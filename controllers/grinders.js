const Grinder = require('../models/grinder')

module.exports = {
    create,
    new: newGrinder
}

function create(req, res) {
    const grinder = new Grinder (req.body)
    grinder.save(function (err) {
        if (err) res.redirect('/equipment/new')
        res.redirect('equipment/index')
    })
}

function newGrinder(req, res) {
    Grinder.find({}, function (err, grinders) {
        res.render('equipment/new', { title: "Add Equipment", grinders })
    })
}