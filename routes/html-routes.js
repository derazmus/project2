// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // landing route loads landing.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });
  // add route loads the report.html page,
  // where users can enter new encounters to the db
  app.get("/report", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/report.html"));
  });
 
  // displays encounters searcg
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
};
