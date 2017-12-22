/**
 * Using bodyparser.urlencoded to parse post data coming 
 * from form submit as url-encoded, with extended false 
 * since we don't have nested post data to parse.
 *  Using bodyparser.json() to parse post data coming as json.
 *  Application routes configured at /cloud/version1 
 *  which is listening on port 3000.
 */
const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./routes.js");
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use("/cloud/version1", routes);
app.listen( 8080);

module.exports = app;
