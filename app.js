var express = require('express');
var app = express();

app.all('/token.json', function(req, res){





  var signature = req.query.signature;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;
  var echostr=req.query.echostr;


  console.log("signature:"+signature);
  console.log("timestamp:"+timestamp);
  console.log("nonce:"+nonce);

  res.write(echostr);

  res.end();

});

app.listen(80);
console.log('Listening on port 80');