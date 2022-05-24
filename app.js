const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts')

app.use(express.static('public')); 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts)

 
app.get("/", (req, res, next) => res.render("index.ejs"));
app.get("/about", (req, res, next) => res.render("about.ejs"));
app.get("/works", (req, res, next) => res.render("works.ejs"));
app.get("/photos", (req, res, next) => res.render("photos.ejs"));
 
app.listen(3000,() => {
    console.log('listening on port 3000');
});