const express=require("express");

const app= express();

app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.use(express.static("public"));
app.listen(3000,function(){
	console.log("this is running on server 3000.");
});


