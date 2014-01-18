////////////////////////////////////////////
// server.js에서 wines.js 모듈 로딩
var express = require('express'),
    wines = require('./routes/wines');
var app = express();
  
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
  
app.listen(3000);
console.log('Express Listening on port 3000...');