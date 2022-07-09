var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('signUp/index')
})

router.get('/phone', function (req, res, next) {
  res.render('signUp/phone')
})

module.exports = router
