var express = require('express');
var csrf = require('csurf');

module.exports = function(rootRedirect, redirectController) {
  var router = express.Router();
  router.get('/', function(req, res) {
  	res.redirect(rootRedirect);
  })

  var csrfProtection = csrf({ cookie: true });
  router.get('/:redirect_name', csrfProtection, redirectController.redirect);
  return router;
};
