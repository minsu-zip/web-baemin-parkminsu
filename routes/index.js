var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const nickname = req.session.nickname || '로그인 해주세요'
  res.render('index', { nickname })
})

module.exports = router
