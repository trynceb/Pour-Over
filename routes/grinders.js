var express = require('express');
var router = express.Router();
const grindersCtrl = require('../controllers/grinders');

// router.get('/equipment/index', grindersCtrl.index)
router.get('/equipment/new', grindersCtrl.new)
router.post('/equipment', grindersCtrl.create)

module.exports = router