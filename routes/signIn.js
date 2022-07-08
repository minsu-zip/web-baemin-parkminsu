var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('signIn')
})

router.post('/', function (req, res, next) {
  const [userId, password] = [req.body.userId, req.body.password]
  req.session.userId = userId
  res.redirect('/')
})

module.exports = router
