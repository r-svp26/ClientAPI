var express=require("express");
var bodyparser=require("body-parser");

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next();
  });

var productAPI=require("./controllers/product.controllers");
app.use("/api/product",productAPI);



app.listen(2020);
console.log("Server is running on port 2020 ");


