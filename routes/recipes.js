var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index)

router.get('/new-recipe', recipesCtrl.new)

router.post('/', recipesCtrl.create)

module.exports = router