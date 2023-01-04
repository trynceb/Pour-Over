var express = require('express');
var router = express.Router();
const passport = require('passport')
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index)
router.get('/new-recipe', recipesCtrl.new)
router.get('/equipment', recipesCtrl.equipment)
router.post('/recipes', recipesCtrl.create)
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

router.get('/:id', recipesCtrl.showOne)
router.delete('/pour-over/:id', recipesCtrl.delete)
router.get('/pour-over/:id/edit', recipesCtrl.edit)
router.put('/pour-over/:id', recipesCtrl.update)



module.exports = router