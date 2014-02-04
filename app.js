var express = require('express');
var app = express();

app.all('/token.json', function(req, res){



  var signature = req.query.signature;
  var timestamp = req.query.timestamp;
  var nonce = req.query.nonce;

  var fromUsername = req.query.fromUsername;
  var ToUserName = req.query.ToUserName;
  var Content = req.query.Content;
  var time = new Date().getTime();

  console.log("signature:"+signature);
  console.log("timestamp:"+timestamp);
  console.log("nonce:"+nonce);

  console.log("fromUsername:"+fromUsername);
  console.log("ToUserName:"+ToUserName);
  console.log("Content:"+Content);
  console.log("time:"+time);

  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');


  var textTpl = "<xml>"+
    "  <ToUserName><![CDATA["+ToUserName+"]]></ToUserName>"+
  "  <FromUserName><![CDATA["+fromUsername+"]]></FromUserName>"+
  "  <CreateTime>"+time+"</CreateTime>"+
  " <MsgType><![CDATA[text]]></MsgType>"+
  " <Content><![CDATA[Welcome to wechat world!]]></Content>"+
  "<FuncFlag>0</FuncFlag>"+
  "</xml>";

  res.setHeader('Content-Length', Buffer.byteLength(textTpl));

  res.end(textTpl);





});

app.listen(80);
console.log('Listening on port 80');