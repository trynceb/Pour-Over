var express = require('express');
var router = express.Router();
const brewersCtrl = require('../controllers/brewers');
const grindersCtrl = require('../controllers/grinders');
const isLoggedIn = require('../config/auth')

router.get('/equipment/index', brewersCtrl.index)
router.get('/equipment/new', isLoggedIn, brewersCtrl.new)
router.post('/equipment', isLoggedIn, function(req, res) {
    console.log(req.body.equipment)
    if (req.body.equipment === "Brewer") {
        return brewersCtrl.create(req, res)
    } else {
        return grindersCtrl.create(req, res)
    }
})

module.exports = router