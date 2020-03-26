// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

var blogRoutes = require('./blog-routes')

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("bloggerhome");
    }
    res.render("bloggerhome");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("login");
    }
    res.render("login");
  });
  
  app.get("/blogs", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("blogs");
    }
    res.render("blogs");
  });

  app.get("/myprofile", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("myprofile");
    }
    res.render("myprofile");
  });

  app.get("/discover", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("discover");
    }
    res.render("discover");
  });

  app.get("/heatmap", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("heatmap");
    }
    res.render("heatmap");
  });
  
  
  app.get("/bulma", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/bulma.html"));
  });

  app.get("/createblog", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("createblog");
    }
    res.render("createblog");
  });

  //  app.use("/bloggers", blogRoutes);

 
 

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/blogs", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blogs.html"));
  // });

  // app.get("/myprofile", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/myprofile.html"));
  // });

  // app.get("/discover", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/discover.html"));
  // });

  // app.get("/signup", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

};
