var express = require('express');
var router = express.Router();
const brewersCtrl = require('../controllers/brewers');

router.get('/equipment/index', brewersCtrl.index)
router.get('/equipment/new', brewersCtrl.new)
router.post('/equipment', brewersCtrl.create)

module.exports = router