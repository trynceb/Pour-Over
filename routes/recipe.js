var express = require('express');
var router = express.Router();
const recipesCtrl = ('../controllers/recipes')

router.get('/', recipesCtrl.index)

module.exports = router