var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home.ejs");
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Jimmy"},
        {title: "Post 3", author: "Jackie"},
    ];

    res.render("posts", {posts: posts});
})




app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});



app.listen(3000, function(){
   console.log("Server is running"); 
})