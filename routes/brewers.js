var express = require('express');
var router = express.Router();
const brewersCtrl = require('../controllers/brewers');

router.get('/brewers/new', brewersCtrl.new)
router.post('/brewers', brewersCtrl.create)

module.exports = router