const Grinder = require('../models/grinder')

module.exports = {
    create: addGrinder,
    new: newGrinderForm
}

async function addGrinder(req, res) {
    try {
        const grinder = new Grinder (req.body)
        await grinder.save()
        res.redirect('equipment/index')
    } catch (err) {
        res.redirect('/equipment/new')
    }
}


async function newGrinderForm(req, res) {
    try {
        const grinders = await Grinder.find({})
        res.render('equipment/new', { title: "Add Equipment", grinders})
    } catch (err) {
        console.warn(err.message)
    }
}