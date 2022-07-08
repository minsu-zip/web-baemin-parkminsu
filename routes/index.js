var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const userId = req.session.userId || '로그인 해주세요'
  res.render('index', { userId })
})

module.exports = router
