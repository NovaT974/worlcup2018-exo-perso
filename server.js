var express = require('express'),
    server = express();

server.use(express.static("static"));

server.get("/",function(req, res){
    res.sendFile(__dirname +"/index.html");
});

server.get("/equipes",function(req, res){
    res.sendFile(__dirname +"/equipes.json");
});

server.listen(3002);   