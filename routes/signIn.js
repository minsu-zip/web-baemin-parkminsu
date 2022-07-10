var express = require('express')
var router = express.Router()
const db = require('../public/database/db.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  const error = req.session.error || false
  res.render('signIn', { error })
})

router.post('/', function (req, res, next) {
  const { email, password } = req.body
  const user = db.get('users').find({ email }).value()
  if (user?.password === password) {
    req.session.error = false
    req.session.nickname = user.nickname
    res.redirect('/')
  } else {
    req.session.error = true
    res.redirect('/signIn')
  }
})

module.exports = router
