const express = require('express');
var app = express();
var request = require('request');
const API_KEY = "f16ef492";
/*apikey=f16ef492*/

app.set("view engine", "ejs");

app.get("/" , function(req, res){
	res.render("search");
	
});

app.get("/results", function(req,res){
	request("http://www.omdbapi.com/?s=california&apikey=f16ef492", function(error,response, body){
		if(!error && response.statusCode ===200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.listen(3000, function(){
		console.log("app started!!!");
});