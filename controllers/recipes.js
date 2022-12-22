const Recipe = require('../models/recipe.js')

module.exports = {
    index
}

function index(req, res) {
    res.render('pour-over/index', { title: 'Home Page', recipes})
}