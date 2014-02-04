var express = require('express');
var app = express();

app.get('/token.json', function(req, res){

  var signature = req.query.signature;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;
  console.log("signature:"+signature);
  console.log("timestamp:"+timestamp);
  console.log("nonce:"+nonce);

  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});

app.listen(80);
console.log('Listening on port 80');