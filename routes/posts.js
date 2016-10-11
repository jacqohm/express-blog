var express = require('express')

var router = express.Router()


// set the route signature app.get('/pathname', callback function (request, responnse))
router.get('/', function (req, res){
  res.send('Alot of posts here')
})

router.get('/new', function (req, res){
  res.send('new posts 1, 2, 3')
})

router.get('/1', function (req, res){
  res.send('Life experience')
})

router.get('/1/edit', function (req, res){
  res.send('post, delete, change text etc...')
})


module.exports = router
