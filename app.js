//import express
//express is an object and function
var express = require('express')

var app = express()
var port = 3000

// var routes = require('./routes/index')
// var post_routes = require('./routes/posts')
// app.use('/', routes)
// app.use('/posts', post_routes)

var path = require('path')
app.set('view engine', 'ejs')

app.get('/contact',function (req, res){
  res.render('index', {name: 'CONTACT US'})
})

app.get('/about',function (req, res){
  res.render('index', {name: 'ALL ABOUT US'})
})

app.get('/',function (req, res){
  res.render('index', {name: 'Meow Meow'})
})

var posts = function(req,res,next) {
  // do whatever logic is needed
  res.send('Woohoo information for id ' + req.params.id);
}
app.get('/posts/:id',posts);

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
