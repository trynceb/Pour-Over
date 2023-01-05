var express = require('express');
var router = express.Router();
const grindersCtrl = require('../controllers/grinders');
const isLoggedIn = require('../config/auth')

router.get('/equipment/new', isLoggedIn, grindersCtrl.new)
router.post('/equipment', isLoggedIn, grindersCtrl.create)

module.exports = router