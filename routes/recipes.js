var express = require('express');
var router = express.Router();
const passport = require('passport')
const recipesCtrl = require('../controllers/recipes')
const isLoggedIn = require('../config/auth')

router.get('/', recipesCtrl.index)
router.get('/new-recipe', isLoggedIn, recipesCtrl.new)
router.get('/equipment', recipesCtrl.equipment)
router.post('/recipes', isLoggedIn, recipesCtrl.create)
router.get('/recipes', recipesCtrl.showAll)

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
      successRedirect : '/',
      failureRedirect : '/'
    }
  ));
  
  router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
    
  });
// end of OAuth routes

router.get('/:id', isLoggedIn, recipesCtrl.showOne)
router.delete('/pour-over/:id', isLoggedIn, recipesCtrl.delete)
router.get('/pour-over/:id/edit', isLoggedIn, recipesCtrl.edit)
router.put('/pour-over/:id', isLoggedIn, recipesCtrl.update)



module.exports = router