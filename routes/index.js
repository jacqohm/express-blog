var express = require('express')

var router = express.Router()


// set the route signature app.get('/pathname', callback function (request, responnse))
router.get('/', function (req, res){
  res.send('Hello World, homepage here')
})

router.get('/contact', function (req, res){
  res.send('Contact Us, call us!')
})

router.get('/about', function (req, res){
  res.send('About Us, intro shit here')
})

router.get('/hello', function (req, res){
  res.send('About Us, intro shit here')
})

module.exports = router
