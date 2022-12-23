var express = require('express');
var router = express.Router();
const passport = require('passport')
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index)

router.get('/new-recipe', recipesCtrl.new)

router.post('/', recipesCtrl.create)

router.get('/recipes', recipesCtrl.showAll)

router.get('/:id', recipesCtrl.showOne)

// OAuth routes
router.get('/auth/google', passport.authenticate(
    'google',
    {
      scope: ['profile', 'email'],
    }
  ));
  
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/pour-over',
      failureRedirect : '/pour-over'
    }
  ));
  
  router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
    
  });
  

  module.exports = router;
  

module.exports = router