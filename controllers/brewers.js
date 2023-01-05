const Brewer = require('../models/brewer')
const Grinder = require('../models/grinder')
const Recipe = require('../models/recipe')

module.exports = {
    index,
    create,
    new: newBrewer
}

async function index(req, res) {
    try {
        const brewers = await Brewer.find({})
        const grinders = await Grinder.find({})
        res.render('equipment/index', { title: "Equipment", brewers, grinders })
    } catch (err) {
        console.warn(err.message)
    }
}

async function create(req, res) {
    try {
        const brewer = new Brewer (req.body)
        await brewer.save()
        res.redirect('equipment/index')
    } catch (err) {
        res.redirect('/equipment/new')
    }
}

async function newBrewer(req, res) {
    try {
        const brewers = await Brewer.find({})
        res.render('equipment/new', { title: "Add Equipment", brewers })
    } catch (err) {
        console.warn(err.message)
    }
}