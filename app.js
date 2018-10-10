var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


const route = require('./routes/route');


mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', function(){
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error', function(err){
  if(err)
  {
      console.log('error data when conneting to database :'+err);
  }
});



const port = 2000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', route);

// testing Server
app.get('/', function(req, res){
    res.send('welcome');
});


app.listen(port, function(){
    console.log('server is started at port :'+port);
});
