var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?s=" + query, function(error, response, body){
       if (!error && response.statusCode ===200){
           var data = JSON.parse(body);
           //res.send(results["Search"][0]["title"]);
           res.render("results", {data: data});
       } 
    });
});

app.listen(3000, 'localhost', function(){
    console.log('server has started localhost:3000');
});
