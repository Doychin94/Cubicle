const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

module.exports = (app) => {
    //TODO: Setup the view engine
    const hbs = handlebars.create({
        extname:".hbs"
    })
    app.engine(".hbs",hbs.engine)
    app.set("view engine",".hbs")



    //TODO: Setup the body parser
     app.use(express.urlencoded({extended:false}))
     
    //TODO: Setup the static files
    app.use("/static",express.static("static"))

};