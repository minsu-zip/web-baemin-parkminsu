var express = require('express')
var router = express.Router()
const db = require('../public/database/db.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('signIn')
})

router.post('/', function (req, res, next) {
  const { email, password } = req.body
  const user = db.get('users').find({ email }).value()

  if (user) {
    req.session.nickname = user.nickname
    res.redirect('/')
  } else {
    res.redirect('/signIn')
  }
})

module.exports = router
