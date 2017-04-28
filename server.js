var express = require("express"); // Looks for the Express library. 
var app = express(); // Wraps Express functionality into app. 
var bodyParser = require("body-parser"); 

app.use(bodyParser.json());

app.get("/hello", function(request, respond){
	var data  = require("./data.json"); // Looks for the data.json file 
	//	respond.write("Hello Server");
	respond.json({"Hello": "Hello Adam", "Syntax":"No is not blah bla"});
	//      respond.sendFile(__dirname + '/index.html');
	//	respond.sendFile(__dirname + '/data.json');
	console.log(data);
	
}); 


app.post("/hello", function(request, respond){


	console.log(request.body);
	respond.sendStatus(200);	

});



app.listen(8080);
console.log("Server is running"); 
