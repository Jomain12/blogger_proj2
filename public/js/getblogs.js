var app = require('../../models');


 
$(document).ready(function() {
  console.log("DOCUMENT READY")
    // Getting references to our form and inputs
    var findBlogForm = $("form.findBlog");
    var nameInput = $("input#blog-name");

    console.log(findBlogForm)

    // When the form is submitted, we validate there's an email and password entered
    findBlogForm.on("submit", function(event) {
      console.log('SUBMITTING')
      event.preventDefault();
      app.findAll().then(name => {
        console.log("All id's:", JSON.stringify(name));
      });

      // search for attributes
    blogs.findOne({ where: {title: 'doggos'} }).then(function(project) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
    })
      // var userData = {
      //   name: nameInput.val().trim(),
      // };
      
      
  //     if (!userData.name) {
  //       console.log('MISSING DATA')
  //       return;
  //     }
  
  //     console.log("READY TO CREATE")
  //     // If we have an email and password we run the loginUser function and clear the form
  //     findblogs(userData.name);
  //     nameInput.val("");
      

  //     console.log("USERDATA" + userData);
  //   });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function findblogs(name) {
      console.log("CREATEBLOG CALLED")
      $.get("/api/getblog", {
        name: name
      })
        .then(function() {
          console.log("SUCCESS!")
          window.location.replace("/bloggerhome");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    })
